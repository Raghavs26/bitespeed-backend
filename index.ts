import express from "express";
import cors from "cors";
import { identifyRoutes } from "./routes/identifyRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", identifyRoutes);
app.use("/", (req, res) => {
  return res.send("Hii");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
