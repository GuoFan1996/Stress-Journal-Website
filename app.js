const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const connectDB = require('./modules/db.js');

const config = require("./modules/config");
const homeRoutes = require("./routes/home");
const aboutRoutes = require("./routes/about");
const contactRoutes = require("./routes/contact");
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const composeRoutes = require("./routes/compose");
const postRoutes = require("./routes/post");

const app = express();

app.set('view engine', 'ejs');

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false,
  loggedInUser: null,
  currentPosts: []
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const conn = connectDB(true);

app.use(function(req, res, next) {
  req.session.currentPosts = req.session.currentPosts || [];
  next();
});


app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/compose', composeRoutes);
app.use("/posts", postRoutes);

// 404 error, route not found
app.use(function(req, res, next) {
  const error = new Error("Page not found");
  error.status = 404;
  next(error);
});

app.use(function(error, req, res, next) {
  let errCode = error.status || 500;
  let errMsg = error.message || 'Internal Server Error';
  res.status(errCode);
  res.send("Error: " + errCode + "\n" + errMsg);
});

app.listen(config.port, config.server, function() {
  console.log(`Server started on server ${config.server}: port ${config.port}`);
});
