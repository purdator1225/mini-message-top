const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("hello");
});

userRouter.get("/:userId", (req, res) => {
  res.send(`this is user ${req.params.userId}`);
});

module.exports = userRouter;
