const express = require("express");

const userRouter = require("./routes/userRouter");

const app = express();

const path = require("node:path");

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// app.get("/{*splat}", (req, res) => {
//   res.send(`/{*splat} is a greate way to catch all paths`);
// });

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
  { href: "blog", text: "Blog" },
];

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/new", (req, res) => {
  console.log(req.body.user);

  console.log(req.body.text);

  let messageText = req.body.text;
  let messageUser = req.body.user;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index", { links: links, messages: messages });
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`My first app, listening on port ${PORT}`);
});
