import React from "react";
import CodeBlock from "@theme/CodeBlock";

import { needsToken, scenarioUrl } from "./apiVersions";

/**
 * An example cURL command for an endpoint under a scenario, written for API v3 or API v4.
 *
 *   <ScenarioCurl api="v4" method="PUT" scenario={0} path="/custom_curves/interconnector_1_price"
 *     options={["-F file=@my_electricity_price.csv", "-X PUT"]} />
 *
 * `options` are the lines before the URL. In API v4 a change always carries a token, so one is added.
 */
const ScenarioCurl = ({
  api = "v3",
  method = "GET",
  scenario = 12345,
  path = "",
  options = [],
  title = "Example cURL request",
}) => {
  const lines = [
    "curl",
    ...(needsToken(api, method) ? ['-H "Authorization: Bearer YOUR_TOKEN"'] : []),
    ...options,
  ];

  const command = [
    ...lines.map((line, index) => (index === 0 ? `${line} \\` : `  ${line} \\`)),
    `  ${scenarioUrl(api, scenario, path)}`,
  ].join("\n");

  return (
    <CodeBlock language="bash" title={title}>
      {command}
    </CodeBlock>
  );
};

export default ScenarioCurl;
