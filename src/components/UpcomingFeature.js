import React from "react";

import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

import releases from "@site/data/releases";
import { StagingBadge, ProductionBadge } from "./EnvBadge";

import styles from "./UpcomingFeature.module.css";

const UpcomingFeature = ({ release: releaseName }) => {
  const release = releases[releaseName];

  if (!release) {
    return null;
  }

  const today = new Date(Date.now());
  today.setHours(12, 0, 0, 0);

  let text;

  if (
    (release.production && Date.parse(release.production) < today.getTime()) ||
    (!release.staging && Date.parse(release.staging) >= today.getTime())
  ) {
    return <BrowserOnly>{() => {}}</BrowserOnly>;
  }

  const formattedDate = new Date(release.production).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  text = (
    <span>
      This feature is available in the {<StagingBadge />} environment and will become available in{" "}
      {<ProductionBadge />} on {formattedDate} with the {releaseName} release. See the{" "}
      {<Link to="/api/changelog">changelog</Link>} for more information.
    </span>
  );

  return (
    <BrowserOnly>
      {() => (
        <p className={styles.wrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          {text}
        </p>
      )}
    </BrowserOnly>
  );
};

export default UpcomingFeature;
