const express = require("express")
const morgan = require("morgan");
const exphbs = require("express-handlebars")
const path = require('path')
const flash = require("connect-flash");
const session = require('express-session')

const app = express();

//require("./lib/passport");
require("./lib/GestionStudent");

//setings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))


app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))

app.set('view engine', '.hbs');

//Middlewere
//app.use(cookieParser());
app.use(session({

    // It holds the secret key for session 
    secret: 'Your_Secret_Key',

    // Forces the session to be saved 
    // back to the session store 
    resave: true,

    // Forces a session that is "uninitialized" 
    // to be saved to the store 
    saveUninitialized: true
}))
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//Global variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    app.locals.failLogin = req.flash('failLogin')
    next();
})

//Routes
app.use(require('./routes/'));
app.use(require('./routes/autentication'));
app.use('/links', require('./routes/links'));



//public 
app.use(express.static(path.join(__dirname, 'public')))

//start 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})