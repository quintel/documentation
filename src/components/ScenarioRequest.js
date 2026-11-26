import React from "react";
import CodeBlock from "@theme/CodeBlock";

import { HOSTS, SCENARIO_PATHS, TOKEN_HEADER, needsToken, scenarioSuffix } from "./apiVersions";

/**
 * An example request to an endpoint under a scenario, written for API v3 or API v4.
 *
 *   <ScenarioRequest api="v4" method="PUT" path="/heat_network_order" body={"{...}"} />
 *
 * `path` follows the scenario's ID, `headers` are the lines after Host, and `body` is shown after
 * them. In API v4 a change always carries a token, so one is added when `headers` has none.
 */
const ScenarioRequest = ({
  api = "v3",
  method = "GET",
  scenario = 12345,
  path = "",
  headers = ["Accept: application/json"],
  body,
  title = "Example request",
}) => {
  const withToken =
    needsToken(api, method) && !headers.some((header) => header.startsWith("Authorization:"))
      ? [...headers, TOKEN_HEADER]
      : headers;

  const lines = [
    `${method} ${SCENARIO_PATHS[api]}/${scenario}${scenarioSuffix(api, path)} HTTP/2`,
    `Host: ${HOSTS[api]}`,
    ...withToken,
  ];

  const request = body ? `${lines.join("\n")}\n\n${body}` : lines.join("\n");

  return (
    <CodeBlock language="http" title={title}>
      {request}
    </CodeBlock>
  );
};

export default ScenarioRequest;
