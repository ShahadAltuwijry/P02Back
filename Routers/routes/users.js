const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  login,
  addVisit,
  getVisits,
} = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/users", getAllUsers);
userRouter.put("/user/:id", updateUser);
userRouter.post("/login", login);
userRouter.put("/add/:id/:ObjectId", addVisit);
userRouter.get("/user/:name", getVisits);

module.exports = userRouter;
