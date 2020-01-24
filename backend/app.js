const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const app = express();


//install mangos lib: npm install --save mongoose
//mongo db pwd: xrH4n7F9kGhggzms
//mongo db connection: mongodb+srv://Wassim:xrH4n7F9kGhggzms@cluster0-kphbc.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://Wassim:xrH4n7F9kGhggzms@cluster0-kphbc.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 //to handle a post request w need to use: npm install --save body-parser
app.use(bodyParser.json());
app.post('/api/stuff',(req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Thing created successfully!'
    });
});

app.use('/api/stuff',(req, res, next)=>{
const stuff = [
    {
        _id: 'id01',
        title: 'test',
        description: 'test desc',
        imageUrl: 'https://cipher.dakiscdn.com/i/https://1410dd2bdd37e05ebf19-a2305060cc55ab8db83b1ef4b8835a6b.ssl.cf5.rackcdn.com/7PgKd-o3lyfQIgup-R8vbg?w=400&h=400&p=1&a=1&q=display',
        price: 4900,
        userId: 'test'   
    },
    {
        _id: 'id02',
        title: 'test 2',
        description: 'test desc2',
        imageUrl: 'https://www.visualsfrance.com/845-thickbox_default/pxw-fs5-ii.jpg',
        price: 2900,
        userId: 'test2'   
    },
    {
        _id: 'id03',
        title: 'test3',
        description: 'test desc 3',
        imageUrl: 'https://static.fnac-static.com/multimedia/Images/DE/DE/E1/64/6611422-1505-1505-1/tsp20171120151339/Andoer-HDV-534K-4K-Camera-Video-Numerique-48MP-16X-Zoom-Detecter-le-visage-Noir.jpg#65fe1aed-7378-4ca1-9cd3-070bafd2d6b6',
        price: 5000,
        userId: 'test3'   
    },
];
res.status(200).json(stuff);
});

module.exports = app;







/*first middle ware
app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Your request was successful!' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully!');
});
*/
