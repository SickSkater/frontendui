import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { ProgramMediumFragment } from "./Candidate_pageFragments";

const Candidate_pageReadPageQuery = createQueryStrLazy(
`
query Candidate_pageReadPageQuery($skip: Int, $limit: Int, $where: Candidate_pageWhereInputFilter) {
  result: candidate_pagePage(skip: $skip, limit: $limit, where: $where) {
    ...Candidate_pageLarge
  }
}
`, 
ProgramMediumFragment)

export const Candidate_pageReadPageAsyncAction = createAsyncGraphQLAction(ProgramMediumFragment)