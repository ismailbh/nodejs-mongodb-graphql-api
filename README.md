# NODE JS CRUD with MongoDB Database And GraphQL API
+ Creation of GraphQL API .
+ We use Mongodb

## GraphQL API endpoint
```bash
http://localhost:3000/graphql
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `npm start` to start the development server.

### Example of the requests GraphQL

1.  mutation {
   addUser(data: {email: "ax3@ax3.fr", name: "sma3"}) {
     _id
     email
     name
   }
 }

2. mutation {
  updateUser(
   id:"593c2365f4277a04905d04f3",
   data: {name: "sma3"}) {
    _id
    email
    name
 }

3. mutation {
   removeUser(id:"593c2365f4277a04905d04f3") 
   {
     _id
     name
     email
   }
 }

4. mutation{
   addPost(data:{
     uid: "593c1d817e36dd0fb8f17f22",
     title: "New IPhone realsed",
     body: "New IPhone has been realsed yesterday"
   }) {

5.     _id
     uid
     title
     body
   }
}

# query{
#   User(id: "593c1d817e36dd0fb8f17f22") {
#     _id
#     email
#     name
#   }
# }

# query{
#   User(id: "593c1d817e36dd0fb8f17f22") {
#     _id
#     email
#     name
#     posts {
#       _id
#       uid
#       title
#       body
#     }
#   }
# }

# query{
#   Users {
#     _id
#     email
#     name
#     posts {
#       _id
#       uid
#       title
#       body
#     }
#   }
# }




