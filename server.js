const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const passport = require('passport');

dotenv.config({path: './config/config.env'});

connectDB();


const transactions = require('./routes/transactionRouter');
const { getTransactions } = require('./controllers/transactionController');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}
app.use(passport.initialize())
require('./passport')(passport)

app.use('/api/users', require('./routes/userRouter'))

app.use('/api/v1/transactions', transactions);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}` .yellow.bold));