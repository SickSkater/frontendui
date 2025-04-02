import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const Candidate_pageURI = '/candidate_page/candidate_page/view/';

/**
 * A React component that renders a `ProxyLink` to an "candidate_page" entity's view page.
 *
 * The target URL is dynamically constructed using the `candidate_page` object's `id`, and the link displays
 * the `candidate_page` object's `name` as its clickable content.
 *
 * @function Candidate_pageLink
 * @param {Object} props - The properties for the `Candidate_pageLink` component.
 * @param {Object} props.candidate_page - The object representing the "candidate_page" entity.
 * @param {string|number} props.candidate_page.id - The unique identifier for the "candidate_page" entity. Used to construct the target URL.
 * @param {string} props.candidate_page.name - The display name for the "candidate_page" entity. Used as the link text.
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the specified "candidate_page" entity's view page.
 *
 * @example
 * // Example usage with a sample candidate_page entity:
 * const candidate_pageEntity = { id: 123, name: "Example Candidate_page Entity" };
 * 
 * <Candidate_pageLink candidate_page={candidate_pageEntity} />
 * // Renders: <ProxyLink to="/candidate_page/candidate_page/view/123">Example Candidate_page Entity</ProxyLink>
 *
 * @remarks
 * - This component utilizes `ProxyLink` to ensure consistent link behavior, including parameter preservation and conditional reloads.
 * - The URL format `/candidate_page/candidate_page/view/:id` must be supported by the application routing.
 *
 * @see ProxyLink - The base component used for rendering the link.
 */
export const Candidate_pageLink = ({candidate_page}) => {
    return <ProxyLink to={Candidate_pageURI + candidate_page.id}>{candidate_page.name}</ProxyLink>
}