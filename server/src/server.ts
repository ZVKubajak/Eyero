import express from "express";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
