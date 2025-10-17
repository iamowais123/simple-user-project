import express from "express";
import { createUsers, deleteUser, getAllUsers, getSingleUser, updateUsers } from "../controllers/userControllers.js";
import users from "../models/userModel.js";
const userRouter = express.Router();

// create users
userRouter.post("/users", createUsers);

// GET ALL USERS
userRouter.get("/users",getAllUsers);

// get single user by id
userRouter.get("/users/:id",getSingleUser);


// delete user
userRouter.delete("/users/:id",deleteUser);

// update user
userRouter.put("/users/:id",updateUsers);

export default userRouter;