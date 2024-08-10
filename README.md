# Book Search Engine
  
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  In the Book Search Engine project, we were tasked with replacing the existing REST API with GraphQL using an Apollo Provider(Client)/Server. All API endpoints needed to be converted to queries and mutations to fetch and modify data. The existing authentication middleware was refactored to work in the context of GraphQL. The server included schema settings for resolvers and typeDefs so the client could call the correct server functions.
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  
  ## Installation
  To install this project, clone the repository from https://github.com/mattm479/book-search-engine. Once cloned, open a Terminal in the project root and run `npm run install`. After that, you will need to create a .env file and add the following: `SECRET=<YOUR_SECRET>` where <YOUR_SECRET> is the secret you want to have for signing the JWT token.
  
  ## Usage
  To use this project, open a Terminal in the project root and run the following command `npm run develop`. A browser tab should open pointing to http://localhost:3000 that looks like the following ![Screenshot](/client/public/screenshot.png) Also, you can view the deployed application at https://book-search-engine-cjcn.onrender.com.
  
  ## License
  This repository uses the [MIT](https://opensource.org/licenses/MIT) license.
  
  ## Questions
  If you have any questions, you can find me on GitHub at [mattm479](https://github.com/mattm479) or you can email me at [mattm479@gmail.com](mailto:mattm479@gmail.com).
