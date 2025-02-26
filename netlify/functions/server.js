const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server Running" });
});
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express on Netlify!" });
});

module.exports.handler = serverless(app);
