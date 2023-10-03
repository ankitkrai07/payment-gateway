const express = require("express");
const cors = require("cors");
const { orders, verify } = require("./controllers/paytmControlles");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.post("/orders", orders);
app.post("/verify", verify);

app.listen(process.env.PORT, () => {
  console.log(`server on port ${process.env.PORT}`);
});
