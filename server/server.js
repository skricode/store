// const express = require('express'); //we can avoid & use import by putting type:module in package.json
import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

const app = express();
app.use(express.json()); //allows us to accept json data from req.body by parsing

//routes connectivity
app.use("/api/products", productRoutes);

//mongo connection
 //server connection
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});
