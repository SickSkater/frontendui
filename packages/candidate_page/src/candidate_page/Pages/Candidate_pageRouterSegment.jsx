import { Candidate_pageURI } from "../Components/Candidate_pageLink"
import { Candidate_pagePage } from "./Candidate_pagePage"

/**
 * A router segment definition for the Candidate_page page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `Candidate_pageURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} Candidate_pageRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/candidate_page/candidate_page/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <Candidate_pagePage />.
 */
export const Candidate_pageRouterSegment = {
    path: `/${Candidate_pageURI}/:id`,
    element: <Candidate_pagePage />,
}