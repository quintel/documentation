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

const EnvBadge = ({
  component: Component = "span",
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

export const DynamicBadge = ({ prodDate }) => {
  if (Date.parse(prodDate) + 86400000 < Date.now()) {
    return <BrowserOnly>{() => <ProductionBadge />}</BrowserOnly>;
  } else {
    return <BrowserOnly>{() => <StagingBadge />}</BrowserOnly>;
  }
};

export default EnvBadge;
