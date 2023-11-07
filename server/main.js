const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const googleAPIUrl = "https://script.google.com/macros/s/AKfycbxh4ZxEVGdnc5m-_K1_Y2_sl-9yolU5y76ML_zuv83TXO-IxSSdUX9YadkA3eXpPrAZ/exec";

const getData = () => fetch(googleAPIUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json());

const postData = (data) => fetch(googleAPIUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json());


app.get("/", function (req, res) {
    res.send("hello world");
});

app.get("/getTotal", function (req, res) {
    getData().then(data => {
        res.send(data);
    })
});

app.post("/sendDonate", function (req, res) {
    const post = req.body;
    post.type = "donate";
    postData(post).then(data => {
        res.send(data);
    })
});

app.post("/sendMail", function (req, res) {
    const post = req.body;
    post.type = "mail";
    postData(post).then(data => {
        res.send(data);
    })
});

app.listen(port)