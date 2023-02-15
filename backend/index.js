require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT;
const cors = require('cors');
const app = express();
const {connection} = require("./config/db");
const {authRoute} = require("./routes/Auth.route");
const {productRouter} = require("./routes/Product.route");
const {cartRouter} = require("./routes/Cart.route");
const { stripeRouter } = require("./routes/Payment.route");

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use("/auth", authRoute);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/payment", stripeRouter)


app.listen(PORT, () =>{
    connection();
    console.log(`Listening at the http://localhost:${PORT}`);
})
