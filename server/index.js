import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();
app.use(express.json());

app.use(cors({ origin: "*" }));

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/generate", async (req, res) => {
  const { planDesc } = req.body;
  try {
    const studyPlan = await generate(planDesc);
    console.log("Study plan generated successfully for " + planDesc);
    res.json({ studyPlan });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
