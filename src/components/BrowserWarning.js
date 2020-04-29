import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './BrowserWarning.module.css';

const isIE = /*@cc_on!@*/false ||
  (typeof document !== 'undefined' && !!document.documentMode);

const BrowserWarning = () => {
  let content = '';

  if (isIE) {
    content = (
      <div className={`admonition alert ${styles.main}`}>
        <div className="admonition-heading">
          <h5>Internet Explorer is not supported</h5>
        </div>
        <div className="admonition-content">
          <p>
            Sorry, but this website does not support Internet Explorer 11 and
            older. IE11 has
            been replaced by Microsoft Edge and{' '}
            <a href="https://en.wikipedia.org/wiki/Internet_Explorer#End_of_life">
              no longer receives new features
            </a>.{' '}
            <strong>
              We advise upgrading to{' '}
              <a href="https://www.google.com/chrome/">Google Chrome</a>,{' '}
              <a href="https://www.mozilla.org/firefox/new/">Mozilla Firefox</a>,
              {' '}
              <a href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a>,
              {' '}
              or Apple Safari.
            </strong>
          </p>
        </div>
      </div>
    );
  }

  return <BrowserOnly>{() => content}</BrowserOnly>;
}

export default BrowserWarning;
