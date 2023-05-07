import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://pallavi3t:pallavi3t123@to-do-list.g2kahkl.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL)
    .then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// https://www.mongodb.com/cloud/atlas