import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

// listen on port
app.listen(PORT, () => {
  console.log(`Backend server is listen on port: ${PORT}`);
});
