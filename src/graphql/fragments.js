import { gql } from "@apollo/client"

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    ownerAvatarUrl
    description
    language
  }
`

export const PAGE_INFO_DETAILS = gql`
  fragment pageInfoDetails on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`

// const REVIEW_DETAILS = gql`
//   fragment reviewDetails on Review {
//     id
//     user {
//       ...userDetails
//     }
//     repository {
//       ...repositoryDetails
//     }
//     userId
//     repositoryId
//     rating
//     createdAt
//     text
//   }
//   ${REPOSITORY_DETAILS}
//   ${USER_DETAILS}
// `

export const USER_DETAILS = gql`
  fragment userDetails on User {
    username
  }
`
