const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", getContent);

const PORT = 10000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

async function getContent(req, res) {
    let slangs = ["Meme: Meme"]
    let ran = Math.random();
    ran = Math.round(ran * (slangs.length));
    console.log(ran);
    if(ran == slangs.length)
        ran -= 1;
    res.send(JSON.stringify(slangs[ran]));
}