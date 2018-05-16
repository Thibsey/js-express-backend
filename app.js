const express = require('express'),
    validator = require('express-validator/check');



const app = express();


app.listen(3000, () => {
    console.log('Listening to port: 3000')
})