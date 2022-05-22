const express = require('express');
const app = express();
const path = require('path');

// Setting EJS as templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { name: 'Monroe' })
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})