# Book-Search

This is a Book Search Engine using Google API. for the application, it makes use of MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. also, it is using GraphQL API built with Apollo Server instead of RESTful API.
 
## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```


## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```



## Installation
  
to install for running in localhost, just exceute the following:

  ```md
  npm install 
  ```

that would install the following package:
1.  React.  It is a JavaScript library for building user interfaces, especially for single-page applications, that enables developers to create reusable UI components.
2.  Express. It is a minimal and flexible Node.js web application framework that provides a robust set of features for web applications.
3.  Apollo Server. It is open-source GraphQL server that simplifies the process of building production-ready GraphQL APIs in Node.js.
4.  GraphQL. It is s a flexible query language for APIs that allows clients to request specific data as needed, with Query and Mutation.
6.  JWT. It is a compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and authorization purposes.
and so on.


## Technologies Used

This application is built using the following technologies:

- **JavaScript**: Programming language for adding interactivity and dynamic content.
- **NodeJS**: an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.
- **ReactJS**:  It is a JavaScript library developed by Facebook for building dynamic, component-based user interfaces.
- **MongoDB**: It is document-oriented database designed for ease of development and scaling, providing high performance, high availability, and easy scalability by working with schema-free JSON-like documents.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, such as routing, and middleware setup.
- **GraphQL**: query language for APIs that allows clients to request only the data they need, improving efficiency and flexibility.
- **Apollo Server**:  An open-source GraphQL server that provides a robust set of features for developing and deploying scalable and production-ready GraphQL APIs.
- **JWT**: It is a compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication and authorization purposes.

## Usage

The user needs to clone the repository and run 'npm i' to install the following: 

- React
- MongoDB
- Express
- GraphQL
- Apollo Server
- JWT

for localhost:
then run 'npm run start' to start the app.

Alternatively, for git page:

https://book-search1-e784536a5fa5.herokuapp.com/


## Features

The Application can do the following:
- User signup/User Login function
- Search books, then save book to database
- Loading saved books. 
- Remove saved books


## Tests

Testing done on:
1. User Signup
2. User Login
3. Book Search
4. Save book to database
5. load saved book page
6. remove save book


## Resources

```md
Link to GitHub page:

https://book-search1-e784536a5fa5.herokuapp.com/

Link to GitHub repo:

https://github.com/percivalho/Book-Search

```

## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
&copy; Copyright 2023 - Present. Percival Ho