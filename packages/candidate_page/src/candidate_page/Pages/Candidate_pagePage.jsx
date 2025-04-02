import { useState } from "react"
import { useParams } from "react-router"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { Candidate_pageLargeCard } from "../Components"
import { Candidate_pageReadAsyncAction } from "../Queries"
import { Candidate_pagePageNavbar } from "./Candidate_pagePageNavbar"

/**
 * A page content component for displaying detailed information about an candidate_page entity.
 *
 * This component utilizes `Candidate_pageLargeCard` to create a structured layout and displays 
 * the serialized representation of the `candidate_page` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the Candidate_pagePageContent component.
 * @param {Object} props.candidate_page - The object representing the candidate_page entity.
 * @param {string|number} props.candidate_page.id - The unique identifier for the candidate_page entity.
 * @param {string} props.candidate_page.name - The name or label of the candidate_page entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an candidate_page entity.
 *
 * @example
 * // Example usage:
 * const candidate_pageEntity = { id: 123, name: "Sample Entity" };
 * 
 * <Candidate_pagePageContent candidate_page={candidate_pageEntity} />
 */
const Candidate_pagePageContent = ({candidate_page}) => {
    return (<>
        <Candidate_pagePageNavbar candidate_page={candidate_page} />
        <Candidate_pageLargeCard candidate_page={candidate_page}>
            Candidate_page {JSON.stringify(candidate_page)}
        </Candidate_pageLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an candidate_page entity.
 *
 * This component is created using `createLazyComponent` and wraps `Candidate_pagePageContent` to provide
 * automatic data fetching for the `candidate_page` entity. It uses the `Candidate_pageReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `candidate_page` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.candidate_page - The identifier of the candidate_page entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `candidate_page` entity data and displays it
 * using `Candidate_pagePageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const candidate_pageId = "12345";
 *
 * <Candidate_pagePageContentLazy candidate_page={candidate_pageId} />
 */
const Candidate_pagePageContentLazy = ({candidate_page}) => {
    const { error, loading, entity, fetch } = useAsyncAction(Candidate_pageReadAsyncAction, candidate_page)
    const [delayer] = useState(() => CreateDelayer())

    const handleChange = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleChange.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }
    const handleBlur = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleBlur.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        {entity && <Candidate_pagePageContent candidate_page={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an candidate_page entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `candidate_page` object, and passes it to the `Candidate_pagePageContentLazy` component.
 * The `Candidate_pagePageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the candidate_page entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/candidate_page/:id" element={<Candidate_pagePage />} />
 *
 * // Navigating to "/candidate_page/12345" will render the page for the candidate_page entity with ID 12345.
 */
export const Candidate_pagePage = () => {
    const {id} = useParams()
    const candidate_page = {id}

    //zde pripojim page k routeru

    return <div>Hello world {id}</div>
    //return <ProgramPageContentLazy candidate_page={candidate_page} />
}