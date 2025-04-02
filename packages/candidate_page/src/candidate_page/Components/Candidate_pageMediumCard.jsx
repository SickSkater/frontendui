import { PersonFill } from "react-bootstrap-icons"
import { Candidate_pageLink } from "./Candidate_pageLink"
import { Candidate_pageCardCapsule } from "./Candidate_pageCardCapsule"
import { Candidate_pageMediumContent } from "./Candidate_pageMediumContent"

/**
 * A card component that displays detailed content for an candidate_page entity.
 *
 * This component combines `Candidate_pageCardCapsule` and `Candidate_pageMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the candidate_page entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the Candidate_pageMediumCard component.
 * @param {Object} props.candidate_page - The object representing the candidate_page entity.
 * @param {string|number} props.candidate_page.id - The unique identifier for the candidate_page entity.
 * @param {string} props.candidate_page.name - The name or label of the candidate_page entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const candidate_pageEntity = { id: 123, name: "Sample Entity" };
 * 
 * <Candidate_pageMediumCard candidate_page={candidate_pageEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </Candidate_pageMediumCard>
 */
export const Candidate_pageMediumCard = ({candidate_page, children}) => {
    return (
        <Candidate_pageCardCapsule title={<><PersonFill /> <Candidate_pageLink candidate_page={candidate_page} /></>}>
            <Candidate_pageMediumContent candidate_page={candidate_page}>
                {children}
            </Candidate_pageMediumContent>
        </Candidate_pageCardCapsule>
    )
}
