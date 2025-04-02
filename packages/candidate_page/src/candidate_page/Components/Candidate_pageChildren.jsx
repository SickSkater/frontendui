import { ChildWrapper } from "@hrbolek/uoisfrontend-shared";

/**
 * Candidate_pageChildren Component
 *
 * A utility React component that wraps its children with the `ChildWrapper` component, 
 * passing down an `candidate_page` entity along with other props to all child elements.
 * This component is useful for injecting a common `candidate_page` entity into multiple children 
 * while preserving their existing functionality.
 *
 * @component
 * @param {Object} props - The props for the Candidate_pageChildren component.
 * @param {any} props.candidate_page - An entity (e.g., object, string, or other data) to be passed to the children.
 * @param {React.ReactNode} props.children - The children elements to be wrapped and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A `ChildWrapper` component containing the children with the injected `candidate_page` entity.
 *
 * @example
 * // Example usage:
 * const candidate_pageEntity = { id: 1, message: "No data available" };
 *
 * <Candidate_pageChildren candidate_page={candidate_pageEntity}>
 *     <CustomMessage />
 *     <CustomIcon />
 * </Candidate_pageChildren>
 *
 * // Result: Both <CustomMessage /> and <CustomIcon /> receive the 'candidate_page' prop with the specified entity.
 */
export const Candidate_pageChildren = ({candidate_page, children, ...props}) => <ChildWrapper candidate_page={candidate_page} children={children} {...props} />