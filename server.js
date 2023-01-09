// const express = require('express');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const routes = require('./controllers');
// const session = require('express-session');
// require('dotenv').config();


// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);


// const sess = {
//   secret: process.env.SECRET, // gets secret from .env
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };


// // Sets up the Express App
// const app = express();
// const PORT = process.env.PORT || 9001;

// app.use(session(sess));

// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.use(express.static(path.join(__dirname, 'public')));
// //captures body and params for express
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Sets up the routes
// app.use(require('./controllers'));


// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
// });
// Starts the server to begin listening
// app.listen(PORT, () => {
//   console.log('Server listening on: http://localhost:' + PORT);
// });

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const session = require('express-session');
require('dotenv').config(); // allow access to .env

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SECRET, // gets secret from .env
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 7505;

app.use(session(sess));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./controllers'));

// app.use(require('./controllers/..'));
// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});
