import React from 'react';
import styles from './ApiEndpoint.module.css'

const formatParams = (params) => {
  if (!params || !params.length) {
    return null;
  }

  const formatted = params.map(param =>
    <li key={param.name}>
      <code>{param.name}</code>{' '}
      <code className={styles.type}>{param.type}</code>{' '}
      &ndash;{' '}
      <span dangerouslySetInnerHTML={{ __html: param.description }} />
    </li>
  );

  return <ul>{formatted}</ul>;
}

/**
 * Given data about an endpoint, formats it in a definition list.
 */
const ApiEndpoint = ({ data }) => {
  const pathParams = formatParams(data.path_parameters);
  const params = formatParams(data.parameters);

  return (
    <dl className={styles.apiEndpoint}>
      <dt>Endpoint</dt>
      <dd className={styles.endpoint}>{data.method} {data.endpoint}</dd>
      {pathParams ? <dt>Path parameters</dt> : null}
      {pathParams ? <dd>{pathParams}</dd> : null}
      {params ? <dt>Parameters</dt> : null}
      {params ? <dd>{params}</dd> : null}
    </dl>
  );
};

export default ApiEndpoint;
