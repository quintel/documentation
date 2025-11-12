import { useState, useEffect, useRef, useCallback } from 'react';
import { marked } from 'marked';
import styles from './Releases.module.css';
import { ProductionBadge, StableBadge, UnreleasedBadge } from './EnvBadge';
import badgeStyles from './EnvBadge.module.css';

// Data Loading

async function loadUpdatesJson() {
  try {
    const response = await fetch('/releases/updates.json');
    if (!response.ok) throw new Error('Failed to load updates.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading updates.json:', error);
    return [];
  }
}

async function loadMarkdown(file) {
  try {
    const response = await fetch(`/releases/${file}`);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const markdownText = await response.text();
    return marked(markdownText);
  } catch (error) {
    console.error('Error loading markdown:', error);
    return '<p>Error loading content.</p>';
  }
}


export default function Releases({ children }) {
  const [updates, setUpdates] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentsNavRef = useRef(null);
  const detailsRefs = useRef([]);
  const hasInitialized = useRef(false);

  // Helpers

  const renderEnvironmentBadge = useCallback((update) => {
    if (!update || !update.version) return null;

    switch (update.version) {
      case 'latest':
        return <ProductionBadge nolink label={update.version} />;
      case 'upcoming':
        return <UnreleasedBadge label="upcoming" />;
      default:
        return <StableBadge nolink label={update.version} />;
    }
  }, []);

  const syncNestedDetails = useCallback((detail, shouldOpen) => {
    if (!detail) return;
    const nestedDetails = detail.querySelectorAll('details');
    nestedDetails.forEach((nested) => {
      if (shouldOpen) {
        nested.setAttribute('open', '');
      } else {
        nested.removeAttribute('open');
      }
    });
  }, []);

  const openDetails = useCallback((index) => {
    if (typeof index !== 'number') return;
    const targetDetail = detailsRefs.current[index];
    if (!targetDetail) return;

    detailsRefs.current.forEach((detail) => {
      if (!detail) return;
      if (detail === targetDetail) {
        detail.setAttribute('open', '');
        syncNestedDetails(detail, true);
      } else {
        detail.removeAttribute('open');
        syncNestedDetails(detail, false);
      }
    });

    setActiveIndex(index);
  }, [setActiveIndex, syncNestedDetails]);

  // Event Handlers

  function handleSummaryClick(event, index) {
    event.preventDefault();
    const detail = detailsRefs.current[index];
    if (!detail) return;

    const isOpen = detail.hasAttribute('open');
    if (isOpen) {
      detail.removeAttribute('open');
      syncNestedDetails(detail, false);
      setActiveIndex(null);
    } else {
      openDetails(index);
    }
  }

  function handleContentsClick(index) {
    openDetails(index);

    if (typeof window === 'undefined') return;

    const scrollToDetail = () => {
      const detailElement = detailsRefs.current[index];
      if (detailElement) {
        detailElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    };

    if (typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(scrollToDetail);
    } else {
      setTimeout(scrollToDetail, 0);
    }
  }

  // Load updates data on mount

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const updatesData = await loadUpdatesJson();
        const updatesWithContent = await Promise.all(
          updatesData.map(async (update) => {
            const content = await loadMarkdown(update.file);
            return { ...update, content };
          })
        );
        detailsRefs.current = [];
        setActiveIndex(null);
        setUpdates(updatesWithContent);
      } catch (error) {
        console.error('Error loading updates:', error);
      }
    }

    fetchUpdates();
  }, []);

  // Initialize by opening the 'latest' release
  useEffect(() => {
    if (updates.length && !hasInitialized.current) {
      const latestIndex = updates.findIndex(update => update.version === 'latest');

      setTimeout(() => {
        if (detailsRefs.current[latestIndex]) {
          openDetails(latestIndex);
          hasInitialized.current = true;
        }
      }, 200);
    }
  }, [updates, openDetails]);

  const navigableUpdates = updates
    .map((update, index) => ({ ...update, originalIndex: index }))
    .filter(update =>
      update.version === 'latest' ||
      (update.version && update.version !== 'upcoming' && update.version !== 'latest')
    );

  return (
    <div className={styles.pageContainer}>
      <div className="row">
        {/* Releases List */}
        <div className={`col ${styles.mainColumn}`}>
          {children && (
            <div className={styles.intro}>{children}</div>
          )}
          {updates.map((update, index) => (
            <details
              key={update.file}
              className={styles.releaseSection}
              ref={(element) => {
                detailsRefs.current[index] = element;
              }}
            >
              <summary
                className={styles.releaseSummary}
                onClick={(event) => handleSummaryClick(event, index)}
              >
                <div className={styles.summaryHeader}>
                  <h2 className={styles.releaseDate}>{update.date}</h2>
                  <div className={styles.releaseInfo}>
                    <span className={styles.releaseTitle}>{update.title}</span>
                    {renderEnvironmentBadge(update)}
                  </div>
                </div>
                {update.tag && (
                  <span
                    className={styles.tagLink}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://github.com/quintel/etmodel/releases/tag/${update.tag}`, '_blank', 'noopener,noreferrer');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(`https://github.com/quintel/etmodel/releases/tag/${update.tag}`, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <span className={styles.tag}>{update.tag}</span>
                  </span>
                )}
              </summary>
              <div
                className={styles.releaseContent}
                dangerouslySetInnerHTML={{ __html: update.content }}
              />
            </details>
          ))}
        </div>

        {/* Table of Contents Sidebar */}
        {updates.length > 0 && (
          <div className={`col col--3 ${styles.tocColumn}`}>
            <aside ref={contentsNavRef} className={styles.tocSidebar}>
              <div className={styles.tocContainer}>
                <h3 className={styles.tocTitle}>On this page</h3>
                <ul className={styles.tocList}>
                  {navigableUpdates.map((update) => (
                    <li key={update.originalIndex} className={styles.tocItem}>
                      <button
                        className={`${styles.tocLink} ${activeIndex === update.originalIndex ? styles.tocLinkActive : ''}`}
                        type="button"
                        onClick={() => handleContentsClick(update.originalIndex)}
                      >
                        {update.version === 'latest' ? (
                          <>
                            <span className={styles.tocLinkText}>Latest</span>
                            <span className={`${badgeStyles.badge} ${badgeStyles.production} ${styles.tocBadge}`}>
                              {update.version}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className={styles.tocLinkText}>Stable</span>
                            <span className={`${badgeStyles.badge} ${badgeStyles.stable} ${styles.tocBadge}`}>
                              {update.version}
                            </span>
                          </>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
