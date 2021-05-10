const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const con = require("./database");

const authRouter = require("./controllers/auth");
const productRouter = require("./controllers/product");
const cartRouter = require("./controllers/cart");

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.listen(port, () => {
  console.log(`Server running at   http://localhos:t${port}`);
});
