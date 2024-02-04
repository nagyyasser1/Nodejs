import express from "express";
import { urlencoded, json } from "express";
import session from "express-session";
import { connect } from "mongoose";
import MongoStore from "connect-mongo";
import { config } from "dotenv";
import cors from "cors";

config();

const store = new MongoStore({
  mongoUrl: process.env.MONGODB_URI,
  collection: "sessions",
  ttl: 24 * 60 * 60,
  autoRemove: true,
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// Session configuration
app.use(
  session({
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

// Routes
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Connect to MongoDB
connect(process.env.MONGODB_URI, {}).then(() => {
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
