const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose')
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Products");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  const user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});

app.post("/add-product", async (req, resp) => {
  const product = new Product(req.body);
  let result = await product.save();

  resp.send(result);
});

app.get("/products", async (req, resp) => {
  let product = await Product.find();
  if (product.length > 0) {
    resp.send(product);
  } else {
    req.send({ result: "no data found" });
  }
});

app.delete("/product/:id", async (req, resp) => {
  const result =await Product.deleteOne({ _id: req.params.id });

  resp.send(result);
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
