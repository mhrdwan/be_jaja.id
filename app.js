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
var dompetkuRouter = require("./routes/seller/dompetku");
var rekeningRouter = require("./routes/seller/rekening_bank");
var vouceherRouter = require("./routes/seller/voucher");
var reviewRouter = require("./routes/seller/review");
var reportRouter = require("./routes/seller/report");
var pengaturanRouter = require("./routes/seller/pengaturan");
var selectRouter = require("./routes/seller/select");
const getListOrders = require("./controllers/seller/list_controller");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
  })
);
// app.use(cors());
app.options("*", cors());
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);
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
app.use("/v1/rekening", rekeningRouter);
// catch 404 and forward to error handler
app.use("/v1/dompetku", dompetkuRouter);
app.use("/v1/review", reviewRouter);
app.use("/v1/report", reportRouter);
app.use("/v1/pengaturan", pengaturanRouter);
app.use("/v1/select", selectRouter);
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
