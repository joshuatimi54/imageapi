const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const media = require('./models/media_urls');

// express app
const app = express();

// connect to mongodb
mongoose.set('strictQuery', false);

const dbURI = 'mongodb+srv://one-new:tvAte0ofJTw5uCuB@cluster0.gx4k5pc.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// image routes
app.get('/', (req,res) => {
    media.find().limit(1000)
    .then((result) => {
       //res.send(result);
       res.render('index', {title: 'Home', media: result});
    })
    .catch((err) => {
        console.log(err);
    })
})



//404 page
app.use((req, res) => {
res.status(404).render('404',  { title: '404' });
})
