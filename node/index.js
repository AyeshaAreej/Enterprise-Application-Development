require('dotenv').config();
const express = require('express');
const path = require('path');
const Product= require('./Product') 
const session= require('express-session');
const mongoose= require('mongoose');

//mongoose
const app=express();
const PORT= process.env.PORT || 4000;


//database connection
//mongoose.connect("mongodb://127.0.0.1:27017/node_crud");
// or
mongoose.connect(process.env.DB_URI , { useNewUrlParser: true });
const db=mongoose.connection;
db.on('error', (error)=> console.log(error));
db.once('open' , ()=> console.log('Connected to database!'));
 


//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json());



// app.use(
//     session({
//     Secret:"my secret key ",
//     saveUninitialized:true,
//     resave:false,

// }));

// app.use((req,res,next)=>{
//     res.locals.message= req.session.message;
//     delete req.session.message;
//     next();
// })

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
app.get('/add', (req,res)=>{
    res.render('add_users', {title: 'Add User' })
})


// app.use('/users', (req,res)=>{
//     res.send("All Users")
// })

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