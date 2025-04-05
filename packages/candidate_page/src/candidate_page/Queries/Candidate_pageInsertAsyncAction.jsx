import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { ProgramMediumFragment } from "./Candidate_pageFragments";

const Candidate_pageInsertMutation = createQueryStrLazy(
`
mutation Candidate_pageInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: candidate_pageInsert(
    candidate_page: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...Candidate_pageLarge
  }
}
`,
ProgramMediumFragment)


export const Candidate_pageInsertAsyncAction = createAsyncGraphQLAction(ProgramMediumFragment)