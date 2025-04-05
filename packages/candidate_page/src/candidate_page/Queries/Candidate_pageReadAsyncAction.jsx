import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { ProgramLargeFragment } from "./Candidate_pageFragments";

const Candidate_pageReadQuery = createQueryStrLazy(
`
query Candidate_pageReadQuery($id: UUID!) {
  result: programById(id: $id) {
    ...Candidate_pageLarge
  }
}
`, 
ProgramLargeFragment)

    /**
 * An async action for executing a GraphQL query to read candidate_page entities.
 *
 * This action is created using `createAsyncGraphQLAction` with a predefined `Candidate_pageQueryRead` query.
 * It can be dispatched with query variables to fetch data related to candidate_page entities from the GraphQL API.
 *
 * @constant
 * @type {Function}
 *
 * @param {Object} query_variables - The variables for the GraphQL query.
 * @param {string|number} query_variables.id - The unique identifier for the candidate_page entity to fetch.
 *
 * @returns {Function} A dispatchable async action that performs the GraphQL query, applies middleware, and dispatches the result.
 *
 * @throws {Error} If `query_variables` is not a valid JSON object.
 *
 * @example
 * // Example usage:
 * const queryVariables = { id: "12345" };
 *
 * dispatch(Candidate_pageReadAsyncAction(queryVariables))
 *   .then((result) => {
 *     console.log("Fetched data:", result);
 *   })
 *   .catch((error) => {
 *     console.error("Error fetching data:", error);
 *   });
 */
export const Candidate_pageReadAsyncAction = createAsyncGraphQLAction(Candidate_pageReadQuery)