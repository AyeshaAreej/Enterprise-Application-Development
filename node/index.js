const express = require('express');
const app = express();
const path = require('path');
const Product= require('./Product') 

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',
{useNewUrlParser: true,
useUnifiedTopology: true}).then(()=>{
    console.log('connection is successfully')
}).catch((err)=>{
    console.log(err);
});
 
 
// Setting EJS as template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//adding public folder
app.use(express.static('public/css/'))


app.get('/', (req, res) => {
    res.render('home', { name: 'Ayesha Areej'})
})

app.use('/about', (req,res)=>{
    res.render('about', { name: 'Ayesha Areej' })
})

app.use('/products', (req,res)=>{
  
    const products=['A','B','C','D','E','F']
    res.render('products', { name: 'Ayesha Areej', products })
})

app.use('/create', (req,res)=>{
    res.render('create')
})
//error message 
app.use('*', (req, res)=>{
    res.status(404).json({"msg":"Not Found"})
})


// creating and posting product
app.post("/product/create", function(req, res) {
    Product.create(req.body, function(err, product){
     console.log(product)
    });
});


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})