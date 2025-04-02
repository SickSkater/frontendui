import { CardCapsule } from "@hrbolek/uoisfrontend-shared"
import { PersonFill } from "react-bootstrap-icons"
import { Candidate_pageLink } from "./Candidate_pageLink"

/**
 * A specialized card component that displays an `Candidate_pageLink` as its title and encapsulates additional content.
 *
 * This component extends the `CardCapsule` component by using a combination of a `PersonFill` icon and 
 * an `Candidate_pageLink` component in the card's header. The `children` prop is used to render any content 
 * inside the card body. It is designed for use with entities represented by the `candidate_page` object.
 *
 * @component
 * @param {Object} props - The props for the Candidate_pageCardCapsule component.
 * @param {Object} props.candidate_page - The object representing the candidate_page entity.
 * @param {string|number} props.candidate_page.id - The unique identifier for the candidate_page entity.
 * @param {string} props.candidate_page.name - The display name for the candidate_page entity.
 * @param {React.ReactNode} [props.children=null] - The content to render inside the card's body.
 *
 * @returns {JSX.Element} The rendered card component with a dynamic title and body content.
 *
 * @example
 * // Example usage:
 * import { Candidate_pageCardCapsule } from './Candidate_pageCardCapsule';
 * import { Button } from 'react-bootstrap';
 *
 * const candidate_pageEntity = { id: 123, name: "Example Entity" };
 *
 * <Candidate_pageCardCapsule candidate_page={candidate_pageEntity}>
 *   <Button variant="primary">Click Me</Button>
 * </Candidate_pageCardCapsule>
 */
export const Candidate_pageCardCapsule = ({candidate_page, children, title=<><PersonFill /> <Candidate_pageLink candidate_page={candidate_page} /></>}) => {
    return (
        <CardCapsule title={title}>
            {children}
        </CardCapsule>
    )
}
