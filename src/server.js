// const { response } = require("express");
const express = require("express");
require("../src/db/connection");
const router = require("../src/routers/route");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is runnning on PORT ${PORT}`);
});
