const { gql } = require('apollo-server'); 

const typeDefs = gql`

    #main query
    type Query {
        
        #list of users
        getUsers: [User!]!
        #single user
        getSingleUser(id: ID): User!

        #list of posts
        getPosts: [Post!]!
        #single post
        getSinglePost(id: ID): Post!
    }

    type Mutation {

        #delete user
        deleteUser(id: ID!): String!
        #create user
        createUser(input: CreateUserInput!): User!
        #update user
        updateUser(input: UpdateUserInput!): User!

        #delete user
        deletePost(id: ID!): String!
        #create post
        createPost(input: CreatePostInput!): Post!
        #update post
        updatePost(input: UpdatePostInput): Post!
    }

    input UpdatePostInput {
        id: ID!,
        title: String!
        description: String!
        image: String!
    }

    input UpdateUserInput {
        id: ID!
        firstName: String!
        lastName: String! 
    }

    input CreatePostInput {
        title: String!
        description: String!
        image: String!
    }

    input CreateUserInput {
        firstName: String!
        lastName: String!
    }

    #user 
    type User {
        id: ID!
        firstName: String!
        lastName: String!
    }

    #post
    type Post {
        id: ID!
        title: String!
        description: String!
        image: String
    }
`;

module.exports = typeDefs;