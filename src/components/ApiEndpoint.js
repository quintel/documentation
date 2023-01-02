import React from "react";
import Link from "@docusaurus/Link";

import styles from "./ApiEndpoint.module.css";

const formatParams = (params) => {
  if (!params || !params.length) {
    return null;
  }

  const formatted = params.map((param) => (
    <li key={param.name}>
      <div>
        <code>{param.name}</code> <code className={styles.type}>{param.type}</code>
        {param.required ? <span className={styles.requiredParam}>Required</span> : null}
      </div>
      <div
        className={styles.paramDescription}
        dangerouslySetInnerHTML={{ __html: param.description }}
      />
    </li>
  ));

  return <ul>{formatted}</ul>;
};

const SCOPE_DESCRIPTIONS = {
  "scenarios:read": "Read your public and private scenarios",
  "scenarios:write": "Create and update your public and private scenarios",
  "scenarios:delete": "Delete your public and private scenarios",
};

const TokenRequirements = ({ scopes, type = "required" }) => {
  if (!scopes || !scopes.length) {
    return null;
  }

  console.log(type);

  return (
    <>
      <dt>Token</dt>
      <dd>
        <p
          style={{
            marginTop: "0.125rem",
            marginBottom: "0.5rem",
            fontWeight: 400,
            fontSize: "0.875rem",
          }}
        >
          <TokenType type={type} />
        </p>
        <ul>
          {scopes.map((scope) => (
            <Scope key={scope} scope={scope} />
          ))}
        </ul>
      </dd>
    </>
  );
};

const TokenType = ({ type }) => {
  console.log(type);
  if (type === "optional") {
    return (
      <>
        An <Link to="/api/authentication">authentication token</Link> is optional for this endpoint,
        but required to access private data.
      </>
    );
  }

  if (type === "optional-owned") {
    return (
      <>
        An <Link to="/api/authentication">authentication token</Link> is optional for this endpoint
        when accessing{" "}
        <Link to="/api/authentication#using-the-api-without-authentication">unowned data</Link> but
        required when accessing data owned by the user.
      </>
    );
  }

  return (
    <>
      This endpoint requires an <Link to="/api/authentication">authentication token</Link> with at
      least the following scopes:
    </>
  );
};

const Scope = ({ scope }) => {
  return (
    <>
      <li>
        <code>{scope}</code>
        <p style={{ marginTop: 0, marginBottom: 0, fontSize: "0.875rem" }}>
          {SCOPE_DESCRIPTIONS[scope]}
        </p>
      </li>
    </>
  );
};

/**
 * Given data about an endpoint, formats it in a definition list.
 */
const ApiEndpoint = ({ data }) => {
  const pathParams = formatParams(data.path_parameters);
  const params = formatParams(data.parameters);

  return (
    <dl className={styles.apiEndpoint}>
      <dt>Endpoint</dt>
      <dd className={styles.endpoint}>
        {data.method} {data.endpoint}
      </dd>
      {pathParams ? <dt>Path parameters</dt> : null}
      {pathParams ? <dd>{pathParams}</dd> : null}
      {params ? <dt>Parameters</dt> : null}
      {params ? <dd>{params}</dd> : null}
      <TokenRequirements {...data.token} />
    </dl>
  );
};

export default ApiEndpoint;
