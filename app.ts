// Import express module
import express from "express";
import config from "config";
import UserRouter from "@routes/user.routes";

// This is the place where Express application set up
// Create an instance of express
const app = express();

// Define the port to run the server on
const PORT = config.port;

app.use(express.json());

// Define a route for GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", UserRouter);

export default app;
