const typeDefs = `
    type Book {
        authors: [String]
        description: String!
        bookId: ID!
        image: String
        link: String
        title: String!
    }
    
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Auth {
        token: String
        user: User
    }
    
    type Query {
        me(_id: ID!): User
    }
    
    input SaveBookInput {
        authors: [String]
        description: String!
        title: String!
        bookId: String!
        image: String
        link: String
    }
    
    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(userId: ID!, input: SaveBookInput!): User
        removeBook(userId: ID!, bookId: ID!): User
    }
`;

module.exports = typeDefs;
