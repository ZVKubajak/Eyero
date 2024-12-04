import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/routes", routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
