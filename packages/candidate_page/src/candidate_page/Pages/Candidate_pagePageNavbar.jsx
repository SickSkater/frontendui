import Nav from 'react-bootstrap/Nav'
import { ProxyLink, MyNavbar, useHash } from '@hrbolek/uoisfrontend-shared';

import { Candidate_pageURI } from '../Components'
/**
 * A navigation button component that generates a URL based on the candidate_page's ID and a specific segment.
 * The button uses a `ProxyLink` to navigate while preserving hash and query parameters.
 *
 * ### Features:
 * - Dynamically constructs the URL with a hash fragment pointing to the specified segment.
 * - Displays a label for the navigation link.
 * - Integrates seamlessly with `ProxyLink` for enhanced navigation.
 *
 * @component
 * @param {Object} props - The properties for the TitleNavButton component.
 * @param {Object} props.candidate_page - The candidate_page object containing details about the candidate_page.
 * @param {string|number} props.candidate_page.id - The unique identifier for the candidate_page.
 * @param {string} props.segment - The segment to append as a hash fragment in the URL.
 * @param {string} props.label - The text to display as the label for the navigation button.
 *
 * @returns {JSX.Element} A styled navigation button linking to the constructed URL.
 *
 * @example
 * // Example 1: Basic usage with a candidate_page and segment
 * const candidate_page = { id: 123 };
 * const segment = "details";
 * const label = "View Details";
 *
 * <TitleNavButton candidate_page={candidate_page} segment={segment} label={label} />
 * // Resulting URL: `/ug/candidate_page/view/123#details`
 *
 * @example
 * // Example 2: Different segment and label
 * <TitleNavButton candidate_page={{ id: 456 }} segment="settings" label="Candidate_page Settings" />
 * // Resulting URL: `/ug/candidate_page/view/456#settings`
 */
const TitleNavButton = ({ candidate_page, segment, label, ...props }) => {
    // const urlbase = (segment) => `/candidate_pages/candidate_page/${segment}/${candidate_page?.id}`;
    const urlbase = (segment) => `${Candidate_pageURI}${candidate_page?.id}#${segment}`;
    return (
        <Nav.Link as={"span"} {...props}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};

/**
 * Renders the navigation bar for an Candidate_page page.
 *
 * This component uses a custom hook, `useHash()`, to determine the current hash
 * and highlights the active segment. It displays a navigation bar (using MyNavbar)
 * with several segments (e.g. "history", "roles", "graph"), each rendered as a 
 * TitleNavButton. The segments are hardcoded in this component and only rendered 
 * if an `candidate_page` object is provided.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.candidate_page - The candidate_page entity object that provides context for the page.
 * @param {string|number} props.candidate_page.id - The unique identifier for the candidate_page.
 * @param {Function} props.onSearchChange - Callback function to handle changes in the search input.
 *
 * @returns {JSX.Element} The rendered Candidate_pagePageNavbar component.
 *
 * @example
 * // Example usage:
 * const candidate_page = { id: 123, ... };
 * <Candidate_pagePageNavbar candidate_page={candidate_page} onSearchChange={handleSearchChange} />
 */
export const Candidate_pagePageNavbar = ({ candidate_page, onSearchChange }) => {
    const [currentHash, setHash] = useHash(); // Use the custom hook to manage hash

    const segments = [
        { segment: 'history', label: 'Historie'},
        // { segment: 'permissions', label: 'Práva' },
        { segment: 'roles', label: 'Role' },
        // { segment: 'library', label: 'Knihovna' },
        { segment: 'graph', label: 'Stavy' },
    ]
    return (
        <div className='screen-only'>
        <MyNavbar onSearchChange={onSearchChange} >
            {candidate_page && segments.map(({ segment, label }) => (
                <Nav.Item key={segment} >
                    <TitleNavButton
                        candidate_page={candidate_page}
                        segment={segment}
                        label={label}
                        className={segment===currentHash?"active":""} aria-current={segment===currentHash?"page":undefined}
                    />
                </Nav.Item>
            ))}
      </MyNavbar>
      </div>
    );
};