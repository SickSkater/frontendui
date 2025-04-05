import { Input } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that displays medium-level content for an candidate_page entity.
 *
 * This component renders a label "Candidate_pageMediumContent" followed by a serialized representation of the `candidate_page` object
 * and any additional child content. It is designed to handle and display information about an candidate_page entity object.
 *
 * @component
 * @param {Object} props - The properties for the Candidate_pageMediumContent component.
 * @param {Object} props.candidate_page - The object representing the candidate_page entity.
 * @param {string|number} props.candidate_page.id - The unique identifier for the candidate_page entity.
 * @param {string} props.candidate_page.name - The name or label of the candidate_page entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `candidate_page` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const candidate_pageEntity = { id: 123, name: "Sample Entity" };
 * 
 * <Candidate_pageMediumContent candidate_page={candidate_pageEntity}>
 *   <p>Additional information about the entity.</p>
 * </Candidate_pageMediumContent>
 */
export const Candidate_pageMediumEditableContent = ({candidate_page, onChange=(e)=>null, onBlur=(e)=>null, children}) => {
    return (
        <>           
            <Input id={"name"} label={"Název"} className="form-control" defaultValue={candidate_page?.name|| "Název"} onChange={onChange} onBlur={onBlur} />
            <Input id={"name_en"} label={"Anglický název"} className="form-control" defaultValue={candidate_page?.name_en|| "Anglický název"} onChange={onChange} onBlur={onBlur} />
            {children}
        </>
    )
}
