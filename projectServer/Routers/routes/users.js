const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  login,
  addVisit,
} = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/users", getAllUsers);
userRouter.put("/user/:id", updateUser);
userRouter.post("/login", login);
userRouter.post("/add/:ObjectId", addVisit);

module.exports = userRouter;
