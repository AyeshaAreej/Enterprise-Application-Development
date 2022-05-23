require('dotenv').config();
const express = require('express');
const path = require('path');
const Product= require('./Product') 
// const session= require('express-session');
const mongoose= require('mongoose');
const User=require('./models/users');
const multer=require('multer');
const fs=require('fs');

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
 






//image upload
var storage=multer.diskStorage({
    destination: function(req,file, cb){
        cb(null,'./uploads');
    },
    filename: function(req, file,cb){
     cb(null, file.fieldname+"_"+Date.now()+"_"+ file.originalname);  
    },
});

var upload =multer ({
    storage:storage,
}).single('image');

//insert an user into database
app.post('/add', upload,(req, res)=>{
const user=new User({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    image:req.file.filename,
    
});
user.save((err)=>{
    if(err){
        res.json({message:err.message, type:'danger'})
    }
    else{
       console.log('user added successfully')
    };
    res.redirect('/');
})
})

//Get all users route
app.get("/", (req,res)=>{
    User.find().exec((err,users)=>{
        if(err){
            res.json({message:err.message});
        }else{
            res.render("home",{
                users:users,
            });
        }
    });
});

//edit an user
app.get('/edit/:id', (req,res)=>{
    //getting id from url
    let id=req.params.id;
    User.findById(id,(err,user)=>{
     if(err){
         res.redirect('/');
     }
     else{
         if(user==null){
             res.redirect('/');
         }
         else{
             res.render('edit_users',{
                 user:user,
             });
         }
     }
    });
});

//update user route
app.post('/update/:id', upload,(req,res)=>{
let id=req.params.id;
let new_image='';
if(req.file){
    new_image=req.file.filename;
    try {
        fs.unlinkSync('./uploads/' +req.body.old_image);
    } catch(err){
        console.log(err)
    }
} else {
    new_image=req.body.old_image;
}

User.findByIdAndUpdate(id,{
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    image:new_image,
},(err, res)=>{
    if(err){
        res.json({message:err.message});
    }else{
       console.log("Record deleted successfully")
    };
    res.redirect("/");
})
});

//delete user route
app.get('/delete/:id',(req,res)=>{
    let id=req.params.id;
    User.findByIdAndRemove(id, (err,result)=>{
        if(result.image != ''){
            try{
        fs.unlinkSync('./uploads/'+result.image);
 } catch(err){
     console.log(err);
 }
}
if(err){
    res.json({message:err.message});
}else{
   console.log("Record deleted successfully")
};
res.redirect("/");
    })
})

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
app.use(express.static('public/css/'));
//adding uploads folder
app.use(express.static('uploads'));

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
app.use('/add', (req,res)=>{
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


app.listen(PORT, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})

//DB_URI= mongodb://localhost:27017/node_crud