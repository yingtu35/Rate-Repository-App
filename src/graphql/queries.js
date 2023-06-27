import { gql } from "@apollo/client";
import {
  REPOSITORY_DETAILS,
  PAGE_INFO_DETAILS,
  USER_DETAILS,
  REVIEW_DETAILS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  query getRepositories {
    repositories {
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
  query getRepository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repositoryDetails
      reviews {
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
`;

export const GET_USER = gql`
  query getUser {
    me {
      ...userDetails
    }
  }
  ${USER_DETAILS}
`;
