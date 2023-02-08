import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import setupRoutes from './src/routes/setupRoutes.js';
dotenv.config();

const app = express();


app.use(express.json());
app.use(express.static('public'));


mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.once("open", () => {
  console.log("[+] Successfully connected to db");
});

app.set('views', './src/views');
app.set('view engine', 'pug');




setupRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});