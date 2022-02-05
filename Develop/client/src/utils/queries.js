import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        user {
        _id
        username
        email
        bookCount
        savedBooks
        }
    }
`;

export const GET_USERS = gql`
    query users {
    
    _id
    username
    email
    bookCount
    savedBooks
    }
`