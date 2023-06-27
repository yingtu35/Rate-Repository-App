import { gql } from "@apollo/client";
import { USER_DETAILS, REVIEW_DETAILS } from "./fragments";

export const AUTHENTICATE = gql`
  mutation authenticateUser($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        ...userDetails
      }
      accessToken
      expiresAt
    }
  }
  ${USER_DETAILS}
`;

export const CREATE_REVIEW = gql`
  mutation createNewReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...reviewDetails
    }
  }
  ${REVIEW_DETAILS}
`;

export const CREATE_USER = gql`
  mutation createNewUser($user: CreateUserInput) {
    createUser(user: $user) {
      ...userDetails
    }
  }
  ${USER_DETAILS}
`;
