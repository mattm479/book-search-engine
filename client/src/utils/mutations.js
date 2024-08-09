import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
}
`;

export const SAVE_BOOK = gql`
    mutation saveBook($userId: ID!, $input: SaveBookInput!) {
        saveBook(userId: $userId, input: $input) {
            _id
            email
            username
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($userId: ID!, $bookId: ID!) {
        removeBook(userId: $userId, bookId: $bookId) {
            _id
            email
            username
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;