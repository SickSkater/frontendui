import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { Candidate_pageCardCapsule } from "./Candidate_pageCardCapsule"
import { Candidate_pageMediumCard } from "./Candidate_pageMediumCard"

/**
 * A large card component for displaying detailed content and layout for an candidate_page entity.
 *
 * This component wraps an `Candidate_pageCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `Candidate_pageMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the Candidate_pageLargeCard component.
 * @param {Object} props.candidate_page - The object representing the candidate_page entity.
 * @param {string|number} props.candidate_page.id - The unique identifier for the candidate_page entity.
 * @param {string} props.candidate_page.name - The name or label of the candidate_page entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const candidate_pageEntity = { id: 123, name: "Sample Entity" };
 * 
 * <Candidate_pageLargeCard candidate_page={candidate_pageEntity}>
 *   <p>Additional content for the middle column.</p>
 * </Candidate_pageLargeCard>
 */
export const Candidate_pageLargeCard = ({candidate_page, children}) => {
    return (
        <Candidate_pageCardCapsule candidate_page={candidate_page} >
            <Row>
                <LeftColumn>
                    <Candidate_pageMediumCard candidate_page={candidate_page}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </Candidate_pageCardCapsule>
    )
}
