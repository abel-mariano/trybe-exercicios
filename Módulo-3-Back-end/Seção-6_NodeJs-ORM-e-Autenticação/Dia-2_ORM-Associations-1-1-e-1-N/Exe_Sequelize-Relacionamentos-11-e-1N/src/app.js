const bodyParser = require('body-parser');
const express = require('express');
const { getAccountById, // Exercício 06
  getAccountByIdLazy, // Exercício 07
  saveAccountAndProfile, // Exercício Bônus 01
} = require('./controllers/accountsController');
const { getCommentsByAccountId, saveComment } = require('./controllers/commentsController'); // Exercício 08 e // Exercício Bônus 02

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', getAccountById); // Exercício 06
app.get('/accounts-v2/:id', getAccountByIdLazy); // Exercício 07
app.get('/accounts/:id/comments', getCommentsByAccountId); // Exercício 08
app.post('/accounts', saveAccountAndProfile); // Exercício Bônus 01
app.post('/accounts/:id/comment', saveComment); // Exercício Bônus 02

module.exports = app;
