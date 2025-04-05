import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { ProgramMediumFragment } from "./Candidate_pageFragments";

const Candidate_pageUpdateMutation = createQueryStrLazy(
`
mutation Candidate_pageUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: candidate_pageUpdate(
    candidate_page: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on Candidate_pageGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...Candidate_pageLarge
      }      
    }
    ...Candidate_pageLarge
  }
}
`, ProgramMediumFragment)

export const Candidate_pageUpdateAsyncAction = createAsyncGraphQLAction(Candidate_pageUpdateMutation)