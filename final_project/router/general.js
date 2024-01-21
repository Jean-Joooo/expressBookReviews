const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      if ((username)) { 
        users.push({"username":username,"password":password});
        return res.status(200).json({message: "User successfully registred. Now you can login"});
      } else {
        return res.status(404).json({message: "User already exists!"});    
      }
    } 
    return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    res.send(JSON.stringify(books,null,4));
});

public_users.get('/', async function (req, res) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      res.send(JSON.stringify({ books }, null, 4));
    } catch (error) {
      console.error("Error while getting book list:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
    
// Get book details based on ISN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn])
});

public_users.get('/isbn/:isbn', async function (req, res) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const isbn = req.params.isbn;
      res.send(books[isbn])
    } catch (error) {
      console.error("Error while getting book details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    let booksByAuthor = [];
    for (let book in books) {
        if (books[book].author === author) {
            booksByAuthor.push(books[book]);
        }
    }
    res.send(booksByAuthor);
});

public_users.get('/author/:author', async function (req, res) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const author = req.params.author;
      let booksByAuthor = [];
      for (let book in books) {
          if (books[book].author === author) {
              booksByAuthor.push(books[book]);
          }
      }
      res.send(booksByAuthor);
    } catch (error) {
      console.error("Error while getting book details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Get book details based on title

public_users.get('/title/:title',function (req, res) {  
    const title = req.params.title;
    let booksByTitle = [];
    for (let book in books) {
        if (books[book].title === title) {
            booksByTitle.push(books[book]);
        }
    }
    res.send(booksByTitle);
});

public_users.get('/title/:title', async function (req, res) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const title = req.params.title;
      let booksByTitle = [];
      for (let book in books) {
          if (books[book].title === title) {
              booksByTitle.push(books[book]);
          }
      }
      res.send(booksByTitle);
    } catch (error) {
      console.error("Error while getting book details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Get book details based on review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn]["reviews"])
  });


module.exports.general = public_users;