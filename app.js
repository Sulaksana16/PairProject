const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}));

const routes = require('./routes/index.js');
app.use(routes);

app.listen(port, () => {
    console.log(`Working at Port:`, port);
})