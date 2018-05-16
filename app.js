const express = require('express'),
    { check, validator } = require('express-validator/check'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    bcrypt = require('bcrypt'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session);



const app = express();



app.listen(3000, () => {
    console.log('Listening to port: 3000')
})