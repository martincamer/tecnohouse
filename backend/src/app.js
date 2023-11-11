import express from "express";
import morgan from "morgan";
import perfilesRoutes from "./routes/perfiles.routes.js";
import authRoutes from "./routes/auth.routes.js";
import categoriasRoutes from "./routes/categoriasPerfiles.routes.js";
import coloresRoutes from "./routes/coloresPerfiles.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

//middlewaress
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => res.json({ message: "welcome to my API" }));
app.use("/api", perfilesRoutes);
app.use("/api", authRoutes);
app.use("/api", categoriasRoutes);
app.use("/api", coloresRoutes);

//error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
