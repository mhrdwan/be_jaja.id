var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/seller/users");
var brandRouter = require("./routes/seller/brand");
var produkRouter = require("./routes/seller/produk");
var etalaseRouter = require("./routes/seller/etalase");
var vouceherRouter = require("./routes/seller/voucher");
const getListOrders = require("./controllers/seller/list_controller");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/listorder", getListOrders);
app.use("/", indexRouter);
// user routes
app.use("/v1/seller", usersRouter);
// brand routes
app.use("/v1/brand", brandRouter);
//etalase
app.use("/v1/etalase", etalaseRouter);
app.use("/v1/voucher", vouceherRouter);
// catch 404 and forward to error handler
//produk
app.use("/v1/produk", produkRouter);
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
