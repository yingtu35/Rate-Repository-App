import { gql } from "@apollo/client"
import { USER_DETAILS } from "./fragments"

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
`
