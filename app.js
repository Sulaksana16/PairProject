const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const session = require("express-session");

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'cftvgasjdfk',
    resave: false,
    saveUninitialized: false
}));

const routes = require('./routes/index.js');
app.use(routes);


app.listen(port, () => {
    console.log(`Working at Port:`, port);
})