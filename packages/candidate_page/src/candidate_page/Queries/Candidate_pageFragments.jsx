import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const Candidate_pageLinkFragment = createQueryStrLazy(
`
fragment Candidate_pageLink on Candidate_pageGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const Candidate_pageMediumFragment = createQueryStrLazy(
`
fragment Candidate_pageMedium on Candidate_pageGQLModel {
  ...Candidate_pageLink
}
`, Candidate_pageLinkFragment)

export const Candidate_pageLargeFragment = createQueryStrLazy(
`
fragment Candidate_pageLarge on Candidate_pageGQLModel {
  ...Candidate_pageMedium
}
`, Candidate_pageMediumFragment)
  