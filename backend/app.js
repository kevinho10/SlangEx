const express = require("express");
const app = express();
const cors = require("cors")

app.get("/", getContent);

const PORT = process.env.PORT || 4000;
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