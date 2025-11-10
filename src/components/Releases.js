import { useState, useEffect, useRef, useCallback } from 'react';
import { Chrono } from 'react-chrono';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
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


export default function Releases() {
  const [updates, setUpdates] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [navHeight, setNavHeight] = useState(0);
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

  // Initialize by opening the 'latest' timeline object
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

  useEffect(() => {
    if (!updates.length) {
      setNavHeight(0);
      return;
    }

    function updateNavHeight() {
      if (contentsNavRef.current) {
        setNavHeight(contentsNavRef.current.getBoundingClientRect().height);
      }
    }

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => {
      window.removeEventListener('resize', updateNavHeight);
    };
  }, [updates.length]);

  const items = updates.map(({ date }) => ({
    title: date,
  }));

  const navigableUpdates = updates
    .map((update, index) => ({ ...update, originalIndex: index }))
    .filter(update =>
      update.version === 'latest' ||
      (update.version && update.version !== 'upcoming' && update.version !== 'latest')
    );

  return (
    <div
      className={styles.pageContainer}
      style={{ '--releases-contents-nav-height': `${navHeight}px` }}
    >
      {/* Contents Navigation */}
      {updates.length > 0 && (
        <nav ref={contentsNavRef} className={styles.contentsNav}>
          <ul className={styles.contentsList}>
            {navigableUpdates.map((update) => (
              <li key={update.originalIndex} className={styles.contentsItem}>
                <button
                  className={styles.contentsLink}
                  type="button"
                  onClick={() => handleContentsClick(update.originalIndex)}
                >
                  {update.version === 'latest' ? (
                    <span
                      className={`${badgeStyles.badge} ${badgeStyles.production} ${styles.contentsBadge}`}
                    >
                      latest
                    </span>
                  ) : (
                    <span
                      className={`${badgeStyles.badge} ${badgeStyles.stable} ${styles.contentsBadge}`}
                    >
                      {update.version}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Timeline */}
      <div className={styles.timelineWrapper}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <Chrono
            items={items}
            mode="VERTICAL"
            disableToolbar
            activeItemIndex={activeIndex ?? undefined}
          >
            {updates.map((update, index) => (
              <div key={update.file} className={styles.timelineCard}>
                <details
                  ref={(element) => {
                    detailsRefs.current[index] = element;
                  }}
                >
                  <summary onClick={(event) => handleSummaryClick(event, index)}>
                    <div className={styles.summaryInfo}>
                      <span className={styles.summaryTitle}>{update.title}</span>
                      <span className={styles.envBadge}>
                        {renderEnvironmentBadge(update)}
                      </span>
                    </div>
                    <div className={styles.summaryMeta}>
                      <span className={styles.date}>{update.date}</span>
                      {update.tag && (
                        <a
                          href={`https://github.com/quintel/etmodel/releases/tag/${update.tag}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.tagLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className={styles.tag}>{update.tag}</span>
                        </a>
                      )}
                    </div>
                  </summary>
                  <div
                    className={styles.cardContent}
                    dangerouslySetInnerHTML={{ __html: update.content }}
                  />
                </details>
              </div>
            ))}
          </Chrono>
        </StyleSheetManager>
      </div>
    </div>
  );
}
