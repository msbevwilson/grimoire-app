const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
//app.use(helmet());
app.use(express.json());
//app.use(cookieParser());
mongoose.connect('mongodb+srv://beverlyDBUser:vnuFPUB63gYQWst@cluster0.p80kybq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

// Headers & CORS
//const helmet = require('helmet')
const cors = require('cors');

//app.use(helmet({crossOriginResourcePolicy: false,}))
////app.use(cors());

app.use(cors({
    origin: 'http://localhost:4000',
    credentials: true,
}));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next();
})

// ROUTER
const bookRoutes = require('./routes/book.routes')
app.use('/api/books', bookRoutes)
const userRoutes = require('./routes/user.routes')
app.use('/api/auth', userRoutes)

// static path for images
const path = require('path')
app.use('/images', express.static(path.join(__dirname, 'images'))) 

module.exports = app
