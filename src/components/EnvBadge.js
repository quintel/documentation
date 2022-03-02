import React from "react";

import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

import styles from "./EnvBadge.module.css";

const EnvBadge = ({ component: Component = "span", children, ...rest }) => {
  return (
    <Component className={styles.badge} {...rest}>
      {children}
    </Component>
  );
};

export const UnreleasedBadge = () => <EnvBadge>Not yet released</EnvBadge>;

export const StagingBadge = () => (
  <EnvBadge component={Link} to="/api/intro#environments">
    Staging
  </EnvBadge>
);

export const ProductionBadge = () => (
  <EnvBadge component={Link} to="/api/intro#environments">
    Production
  </EnvBadge>
);

export const DynamicBadge = ({ prodDate }) => {
  if (Date.parse(prodDate) + 86400000 < Date.now()) {
    return <BrowserOnly>{() => <ProductionBadge />}</BrowserOnly>;
  } else {
    return <BrowserOnly>{() => <StagingBadge />}</BrowserOnly>;
  }
};

export default EnvBadge;
