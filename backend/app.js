import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/api',userRouter);

app.listen(port,() => {
    connectDb();
    console.log('server is listening..');
})