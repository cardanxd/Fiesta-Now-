const express = require("express")
const morgan = require("morgan");
const exphbs = require("express-handlebars")
const path = require('path')
const flash = require("connect-flash");
const session = require('express-session')

const app = express();

require('./../src/lib/Repositories/Student/AcademiasRepository');

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
global.apiConnection = "http://GetDanceNow.somee.com";

app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    app.locals.failLogin = req.flash('failLogin')
    app.locals.error = req.flash('error')
    next();
})

//Routes
app.use(require('./routes/IndexController'));
app.use(require('./routes/AutenticationController'));
app.use(require('./routes/Controllers/MapController'));
app.use('/links', require('./routes/LinksController'));
app.use('/links', require('./routes/Controllers/Academy/AcademyController'));
app.use('/links', require('./routes/Controllers/Academy/ClassController'));
app.use('/links', require('./routes/Controllers/Academy/PanelController'));
app.use('/links', require('./../src/routes/Controllers/Student/AcademyController'));
app.use('/links', require('./../src/routes/Controllers/Student/ClassController'));
app.use('/links', require('./../src/routes/Controllers/Student/InscripcionController'));
app.use('/links', require('./../src/routes/Controllers/Student/StudentController'));

//public 
app.use(express.static(path.join(__dirname, 'public')))

//start 
app.listen(app.get('port'), () => {
    // console.log('Server on port', app.get('port'));
})