import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

try {
  app.listen(8800, () => {
    console.log("Localhost:8800 RODANDO");
  });
} catch (error) {
  console.error("Erro ao iniciar o servidor:", error);
}
