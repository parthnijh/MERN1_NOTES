import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectToMongoDb from "./dbConfig/connectToMongoDb.js"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()
app.use(cookieParser());

// Configure CORS with specific origin
app.use(
    cors({
      origin: "http://localhost:3000", // or use "*" only for dev, not prod
      credentials: true,
    })
  );
  

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.listen(process.env.PORT || 5000, () => {
  connectToMongoDb();
  console.log(`server listening on ${process.env.PORT || 5000}`);
})