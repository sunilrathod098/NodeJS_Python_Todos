import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

//middleware
const app = express();
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

//database connection
mongoose.connect('mongodb://localhost:27017/np_todo')
.then(() => {
    console.log('Database connected successfully!!');
})
.catch((error) => {
    console.log('Database connection failed: ', error);
})

//import routes
import todoRoutes from './Backend/route/todo.route.js';
import userRoutes from './Backend/route/user.route.js';

app.use('/api/auth', userRoutes);
app.use('/api/task', todoRoutes);

//server listen
const port = 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost${port}`);
})