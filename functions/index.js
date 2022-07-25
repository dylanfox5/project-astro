const functions = require("firebase-functions");
const express = require("express");
const app = express();

const posts = [
  {title: "Lorem ipsum dolor", body: "lorem ipsum...", author: "Red", id: 5},
];

app.get("*", (req, res) => {
  res.json(posts);
});

exports.api = functions.https.onRequest(app);
