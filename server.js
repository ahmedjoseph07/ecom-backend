import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from 'cors';

import {notFound} from "./Middlewares/errorHandler.js";
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productsRoutes.js';

dotenv.config();
const app = express();

app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB_URI

mongoose.connect(DB).then(() => {
    console.log('Connected to database')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error)=>{
    console.lofg(`database error ${error.message}`)
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);