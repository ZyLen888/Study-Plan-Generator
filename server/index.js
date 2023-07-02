import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({ origin: "*" }));

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
