import { gql } from "@apollo/client";
import {
  REPOSITORY_DETAILS,
  PAGE_INFO_DETAILS,
  USER_DETAILS,
  REVIEW_DETAILS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $first: Int
    $after: String
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      first: $first
      after: $after
      searchKeyword: $searchKeyword
    ) {
      totalCount
      pageInfo {
        ...pageInfoDetails
      }
      edges {
        node {
          ...repositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGE_INFO_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query getRepository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...repositoryDetails
      url
      reviews(first: $first, after: $after) {
        pageInfo {
          ...pageInfoDetails
        }
        edges {
          node {
            ...reviewDetails
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO_DETAILS}
`;

export const GET_USER = gql`
  query getUser($withReviews: Boolean = false, $first: Int, $after: String) {
    me {
      ...userDetails
      createdAt
      reviewCount
      reviews(first: $first, after: $after) @include(if: $withReviews) {
        pageInfo {
          ...pageInfoDetails
        }
        edges {
          node {
            ...reviewDetails
            repositoryId
          }
        }
      }
    }
  }
  ${USER_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO_DETAILS}
`;
