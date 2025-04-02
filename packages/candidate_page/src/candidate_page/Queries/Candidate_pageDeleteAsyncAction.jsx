import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { Candidate_pageLargeFragment } from "./Candidate_pageFragments";

const Candidate_pageDeleteMutation = createQueryStrLazy(
`
mutation Candidate_pageDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: candidate_pageDelete(
    candidate_page: {id: $id, lastchange: $lastchange}
  ) {
    ... on Candidate_pageGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...Candidate_pageLarge
      }
    }
  }
}
`,
    Candidate_pageLargeFragment)

export const Candidate_pageDeleteAsyncAction = createAsyncGraphQLAction(Candidate_pageDeleteMutation)