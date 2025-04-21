const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser()); // required to parse cookies

app.get('/', (req, res) => {
    res.send("hello world");
});

app.post('/new/car', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("successful");
});

app.listen(3000, () => {
    console.log("server is running on port no 3000");
});
