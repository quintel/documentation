import React from 'react';

const formatParams = (params) => {
  if (!params || !params.length) {
    return null;
  }

  const formatted = params.map(param =>
    <li key={param.name}>
      <code className="param-name">{param.name}</code>{' '}
      <code className="type">{param.type}</code>{' '}
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
    <dl className="api-request-details">
      <dt>Endpoint</dt>
      <dd className="endpoint">{data.method} {data.endpoint}</dd>
      {pathParams ? <dt>Path parameters</dt> : null}
      {pathParams ? <dd>{pathParams}</dd> : null}
      {params ? <dt>Parameters</dt> : null}
      {params ? <dd>{params}</dd> : null}
    </dl>
  );
};

export default ApiEndpoint;
