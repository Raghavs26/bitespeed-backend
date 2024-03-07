import express from "express";
import cors from "cors";
import { identifyRoutes } from "./routes/identifyRoutes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", identifyRoutes);
app.use("/", (req, res) => {
  return res.send("Hii");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
