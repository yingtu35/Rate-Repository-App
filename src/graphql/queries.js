import { gql } from "@apollo/client";
import {
  REPOSITORY_DETAILS,
  PAGE_INFO_DETAILS,
  USER_DETAILS,
  REVIEW_DETAILS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        ...pageInfoDetails
      }
      edges {
        cursor
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
      reviews(first: $first, after: $after) {
        pageInfo {
          ...pageInfoDetails
        }
        edges {
          cursor
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
  query getUser($withReviews: Boolean = false) {
    me {
      ...userDetails
      reviews @include(if: $withReviews) {
        edges {
          node {
            ...reviewDetails
          }
        }
      }
    }
  }
  ${USER_DETAILS}
  ${REVIEW_DETAILS}
`;
