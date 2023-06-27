import { gql } from "@apollo/client";

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
    url
  }
`;

export const PAGE_INFO_DETAILS = gql`
  fragment pageInfoDetails on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`;

export const USER_DETAILS = gql`
  fragment userDetails on User {
    id
    username
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    user {
      ...userDetails
    }
    repositoryId
    rating
    createdAt
    text
  }
  ${USER_DETAILS}
`;
