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

// Get book details based on ISBN
public_users.get('/isbn/1',function (req, res) {
    res.send(JSON.stringify({"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} }, null,4));
});

public_users.get('/isbn/2',function (req, res) {
    res.send(JSON.stringify({"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} }, null,4));
});

public_users.get('/isbn/3',function (req, res) {
    res.send(JSON.stringify({"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} }, null,4));
});

public_users.get('/isbn/4',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} }, null,4));
});

public_users.get('/isbn/5',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "The Book Of Job", "reviews": {} }, null,4));
});

public_users.get('/isbn/6',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} }, null,4));
});

public_users.get('/isbn/7',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "NjSaga", "reviews": {} }, null,4));
});

public_users.get('/isbn/8',function (req, res) {
    res.send(JSON.stringify({"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} }, null,4));
});

public_users.get('/isbn/9',function (req, res) {
    res.send(JSON.stringify({"author": "Honoré de Balzac","title": "Le Le Père Goriot", "reviews": {} }, null,4));
});

public_users.get('/isbn/10',function (req, res) {
    res.send(JSON.stringify({"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} },null,4));
});
  
// Get book details based on author
public_users.get('/author/ChinuaAchebe',function (req, res) {
    res.send(JSON.stringify({"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },null,4));
});

public_users.get('/author/HansChristianAndersen',function (req, res) {
    res.send(JSON.stringify({"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },null,4));
});

public_users.get('/author/DanteAlighieri',function (req, res) {
    res.send(JSON.stringify({"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} }, null,4));
});

public_users.get('/author/Unknown',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} }, null,4));
});

public_users.get('/author/Unknown2',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "The Book Of Job", "reviews": {} }, null,4));
});

public_users.get('/author/Unknown3',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} }, null,4));
});

public_users.get('/author/Unknown4',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "NjSaga", "reviews": {} }, null,4));
});

public_users.get('/author/JaneAusten',function (req, res) {
    res.send(JSON.stringify({"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} }, null,4));
});

public_users.get('/author/HonorédeBalzac',function (req, res) {
    res.send(JSON.stringify({"author": "Honoré de Balzac","title": "Le Père Goriot", "reviews": {} }, null,4));
});

public_users.get('/author/SamuelBeckett',function (req, res) {
    res.send(JSON.stringify({"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} },null,4));
});

// Get all books based on title
public_users.get('/title/ThingsFallApart',function (req, res) {
    res.send(JSON.stringify({"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },null,4));
});

public_users.get('/title/Fairytales',function (req, res) {
    res.send(JSON.stringify({"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },null,4));
});

public_users.get('/title/TheDivineComedy',function (req, res) {
    res.send(JSON.stringify({"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} }, null,4));
});

public_users.get('/title/TheEpicOfGilgamesh',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} }, null,4));
});

public_users.get('/title/TheBookOfJob',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "The Book Of Job", "reviews": {} }, null,4));
});

public_users.get('/title/OneThousandandOneNights',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} }, null,4));
});

public_users.get('/title/NjSaga',function (req, res) {
    res.send(JSON.stringify({"author": "Unknown","title": "NjSaga", "reviews": {} }, null,4));
});

public_users.get('/title/PrideandPrejudice',function (req, res) {
    res.send(JSON.stringify({"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} }, null,4));
});

public_users.get('/title/LePereGoriot',function (req, res) {
    res.send(JSON.stringify({"author": "Honoré de Balzac","title": "Le Père Goriot", "reviews": {} }, null,4));
});

public_users.get('/title/MolloyMalone DiesThe Unnamablethetrilogy',function (req, res) {
    res.send(JSON.stringify({"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} },null,4));
});

//  Get book review
public_users.get('/review/1',function (req, res) {
    res.send(JSON.stringify({"reviews": {} },null,4));
});
public_users.get('/review/2',function (req, res) {
    res.send(JSON.stringify({"reviews": {} },null,4));

});

public_users.get('/review/3',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

public_users.get('/review/4',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

public_users.get('/review/5',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

public_users.get('/review/6',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

public_users.get('/review/7',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

public_users.get('/review/8',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

public_users.get('/review/9',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

public_users.get('/review/10',function (req, res) {
        res.send(JSON.stringify({"reviews": {} },null,4));

    });

module.exports.general = public_users;
