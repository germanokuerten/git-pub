const express = require("express")
const app = express()
const PORT = 3000



app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!")
})

app.listen(PORT, () => {
    console.log("I am listening")
})