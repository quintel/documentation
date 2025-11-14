import React from "react";

import releases from "@site/data/releases";

import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

import styles from "./EnvBadge.module.css";

function linkProps(props) {
  if (props.nolink) {
    return {};
  }

  return { component: Link, to: "/api/intro#environments" };
}

function dynamicBadge({ production, staging }) {
  const today = new Date(Date.now());
  today.setHours(12, 0, 0, 0);

  if (production && Date.parse(production) < today.getTime()) {
    return <ProductionBadge />;
  } else if (staging && Date.parse(staging) < today.getTime()) {
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

export const UnreleasedBadge = ({ label, children, className = '', ...rest }) => (
  <EnvBadge className={className} {...rest}>
    {children ?? label ?? 'Not yet released'}
  </EnvBadge>
);

export const StagingBadge = ({ label, children, className = '', ...rest }) => (
  <EnvBadge
    className={`${styles.staging} ${className}`.trim()}
    {...linkProps(rest)}
    {...rest}
  >
    {children ?? label ?? 'Staging'}
  </EnvBadge>
);

export const ProductionBadge = ({ label, children, className = '', ...rest }) => (
  <EnvBadge
    className={`${styles.production} ${className}`.trim()}
    {...linkProps(rest)}
    {...rest}
  >
    {children ?? label ?? 'Production'}
  </EnvBadge>
);

export const StableBadge = ({ label, children, className = '', ...rest }) => (
  <EnvBadge
    className={`${styles.stable} ${className}`.trim()}
    {...linkProps(rest)}
    {...rest}
  >
    {children ?? label ?? 'Stable'}
  </EnvBadge>
);

export const DynamicBadge = (props) => {
  return <BrowserOnly>{() => dynamicBadge(props)}</BrowserOnly>;
};

export const ReleaseBadge = ({ name }) => {
  const release = releases[name];

  if (!release) {
    return null;
  }

  return <DynamicBadge {...release} />;
};

export default EnvBadge;
