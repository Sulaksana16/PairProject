const express = require('express');
const routes = require('./routes/index.js');
const session = require("express-session");
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'cftvgasjdfk',
    resave: false,
    saveUninitialized: false
}))

app.use(routes);

app.listen(port, () => {
    console.log(`Working at Port:`, port);
})