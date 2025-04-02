import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { Candidate_pageLargeFragment } from "./Candidate_pageFragments";

const Candidate_pageReadPageQuery = createQueryStrLazy(
`
query Candidate_pageReadPageQuery($skip: Int, $limit: Int, $where: Candidate_pageWhereInputFilter) {
  result: candidate_pagePage(skip: $skip, limit: $limit, where: $where) {
    ...Candidate_pageLarge
  }
}
`, 
    Candidate_pageLargeFragment)

export const Candidate_pageReadPageAsyncAction = createAsyncGraphQLAction(Candidate_pageReadPageQuery)