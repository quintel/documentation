import React from "react";

import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

import styles from "./EnvBadge.module.css";

function linkProps(props) {
  if (props.nolink) {
    return {};
  }

  return { component: Link, to: "/api/intro#environments" };
}

function dynamicBadge({ prodDate, stagDate }) {
  const today = new Date(Date.now());
  today.setHours(12, 0, 0, 0);

  if (prodDate && Date.parse(prodDate) < today.getTime()) {
    return <ProductionBadge />;
  } else if (stagDate && Date.parse(stagDate) < today.getTime()) {
    return <StagingBadge />;
  } else {
    return <UnreleasedBadge />;
  }
}

const EnvBadge = ({
  component: Component = "span",
  nolink,
  className,
  children,
  ...rest
}) => {
  return (
    <Component className={`${styles.badge} ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
};

export const UnreleasedBadge = () => <EnvBadge>Not yet released</EnvBadge>;

export const StagingBadge = (props) => (
  <EnvBadge className={styles.staging} {...linkProps(props)} {...props}>
    Staging
  </EnvBadge>
);

export const ProductionBadge = (props) => (
  <EnvBadge className={styles.production} {...linkProps(props)} {...props}>
    Production
  </EnvBadge>
);

export const DynamicBadge = (props) => {
  return <BrowserOnly>{() => dynamicBadge(props)}</BrowserOnly>;
};

export default EnvBadge;
