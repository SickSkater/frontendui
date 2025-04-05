import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"

/**
 * A component for displaying the `vectors` attribute of an candidate_page entity.
 *
 * This component checks if the `vectors` attribute exists on the `candidate_page` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the Candidate_pageVectorsAttribute component.
 * @param {Object} props.candidate_page - The object representing the candidate_page entity.
 * @param {Array} [props.candidate_page.vectors] - An array of vectors items associated with the candidate_page entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const candidate_pageEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <Candidate_pageVectorsAttribute candidate_page={candidate_pageEntity} />
 */
export const Candidate_pageVectorsAttribute = ({candidate_page}) => {
    const { vectors } = candidate_page
    if (typeof vectors === 'undefined') return null
    return (
        <>
            {vectors.map(
                vector => <div vector={item.id}>
                    Probably {'<VectorMediumCard vector=\{vector\} />'} <br />
                    {JSON.stringify(vector)}
                </div>
            )}
        </>
    )
}

const VectorsAttributeQuery = `
query Candidate_pageQueryRead($id: id, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: candidate_pageById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const VectorsAttributeAsyncAction = createAsyncGraphQLAction(
    VectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

export const Candidate_pageVectorsAttributeInifite = ({candidate_page}) => { 
    const {vectors} = candidate_page

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={VectorsAttributeAsyncAction}
        />
    )
}