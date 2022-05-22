const express = require('express');
const app = express();
const path = require('path');

// Setting EJS as template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//adding public folder
app.use(express.static('public/css/'))


app.get('/', (req, res) => {
    // const products=['A','B','C','D','E','F']
    res.render('home', { name: 'Ayesha Areej'})
})

app.use('/about', (req,res)=>{
    res.render('about', { name: 'Ayesha Areej' })
})

app.use('/products', (req,res)=>{
  
    const products=['A','B','C','D','E','F']
    res.render('products', { name: 'Ayesha Areej', products })
})
//error message 
app.use('*', (req, res)=>{
    res.status(404).json({"msg":"Not Found"})
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})