const express = require('express');
const app = express();
const path = require('path');
const indexRouter= require("./routes/index");
const authRouter= require("./routes/auth");
const adminRouter= require("./routes/admin");
const productRouter= require("./routes/product");
const categoriesRouter= require("./routes/category");
const userRouter= require("./routes/user");
const cartRouter= require("./routes/cart");
const paymentRouter= require("./routes/payment");
const orderRouter= require("./routes/order");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");

require("dotenv").config();
require("./config/google_oauth_config");
require("./config/db");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/categories", categoriesRouter);
app.use("/users", userRouter);
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter);
app.use("/order", orderRouter);

app.listen(3000);