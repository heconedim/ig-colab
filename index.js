const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const p = path.join(__dirname, "data", "posts.json");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("page with posts");
});

app.get("/add-post", (req, res) => {
  res.send("page with form to add post");
});

app.post("/add-post", (req, res) => {
  const { title, imgUrl, description } = req.body;

  fs.readFile(p, (err, posts) => {
    const updatedPosts = [req.body, ...JSON.parse(posts)];
    fs.writeFile(p, JSON.stringify(updatedPosts), () => {
      res.redirect("/");
    });
  });
});

app.listen(5000);
