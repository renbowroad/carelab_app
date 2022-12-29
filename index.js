const express = require('express');
const app = express();
const port = 3010;
const db = require('./config/db');
const UserController = require("./controllers/UserController");

db.connect(function (err) {
    if (err) {
        console.log("問題あり");//非同期処理の中で例外を投げるとエラーになる
    }
    console.log('Connected');
});

app.get('/', function (req, res) {
    console.log("a");
    res.send('Hello, World');
});

app.get("/users", UserController.getUsers);
app.get("/users/:id/", UserController.getUser);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);//こっちが先
});