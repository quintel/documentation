import React from "react";
import Link from "@docusaurus/Link";

/**
 * A link from a shared page to another API page, on the same API version as the page showing it.
 *
 *   <ApiLink api={props.api} to="scenarios#set-sliders-in-a-scenario">Set sliders</ApiLink>
 *
 * links to /api/scenarios#… from API v3 and to /api/v4/scenarios#… from API v4.
 */
const ApiLink = ({ api = "v3", to, children }) => (
  <Link to={`/api/${api === "v4" ? "v4/" : ""}${to}`}>{children}</Link>
);

export default ApiLink;
