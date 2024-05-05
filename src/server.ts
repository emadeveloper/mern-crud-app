import express from "express";
import env from "./utils/validateEnv";
import mongoose from "mongoose";
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
    res.send("Hello, World");
})

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTIONS_STRING)
    .then(() => {
        console.log("mongoose is connected");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    ).catch((error) => {
        console.log(error);
    })

