const { gql } = require('apollo-server')


module.exports = gql`
    type Movie {
        _id:        ID!
        title:      String
        year:       Int
        genre:      [genre]
        director:   [String]
        actors:     [String]
        plot:       String
    }
    type User {
        _id:        ID!
        first_name: String
        last_Name:  String
        email:      String
        picture:    String
    }
    type Query {
        me: User
        movies: [Movie]
    }
    enum genre {
        Drama
        Comedy
        Action
        Crime
    }
`
