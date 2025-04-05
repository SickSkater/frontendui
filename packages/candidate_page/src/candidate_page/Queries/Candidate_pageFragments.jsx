import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"


//v linku byva typename, id a name
export const ProgramLinkFragment = createQueryStrLazy(
`
fragment Candidate_pageLink on ProgramGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)

//u medium by mely byt vsechny elementarni atributy
export const ProgramMediumFragment = createQueryStrLazy(
`
fragment Candidate_pageMedium on ProgramGQLModel {
  ...Candidate_pageLink
}
`, ProgramLinkFragment)


//large obsahuje vsechny atributy
export const ProgramLargeFragment = createQueryStrLazy(
`
fragment Candidate_pageLarge on ProgramGQLModel {
  ...Candidate_pageMedium
}
`, ProgramMediumFragment)
  