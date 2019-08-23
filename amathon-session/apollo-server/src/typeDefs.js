const { gql } = require('apollo-server')

module.exports = gql`
schema {
  query: Query
}

type Query {
  db: AutogeneratedMainType
  todo(id: Int!): Todos
  todos: [Todos]
  user(id: Int!): Users
  users: [Users]
  photo(id: Int!): Photos
  photos: [Photos]
  album(id: Int!): Albums
  albums: [Albums]
  comment(id: Int!): Comments
  comments: [Comments]
  post(id: Int!): Posts
  posts: [Posts]
}

type Todos {
  userId: Int
  id: Int
  title: String
  completed: Boolean
}

type Company {
  name: String
  catchPhrase: String
  bs: String
}

type Geo {
  lat: String
  lng: String
}

type Address {
  street: String
  suite: String
  city: String
  zipcode: String
  geo: Geo
}

type Users {
  id: Int
  name: String
  username: String
  email: String
  phone: String
  website: String
  company: Company
  address: Address
}

type Photos {
  albumId: Int
  id: Int
  title: String
  url: String
  thumbnailUrl: String
}

type Albums {
  userId: Int
  id: Int
  title: String
}

type Comments {
  postId: Int
  id: Int
  name: String
  email: String
  body: String
}

type Posts {
  userId: Int
  id: Int
  title: String
  body: String
}

type AutogeneratedMainType {
  todos: [Todos]
  users: [Users]
  photos: [Photos]
  albums: [Albums]
  comments: [Comments]
  posts: [Posts]
}
`