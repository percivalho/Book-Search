import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
  me {
    _id
    username
    email
    password
    savedBooks {
      _id
      authors
      description
      image
      link
      createdAt
      title
    }
  }
}
`;
