const express = require("express")
const app = express()
const PORT = 3000

//Set the 'drinks database' to a variable in server.js
const drinks = require("./models/drinks.js")


app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!")
})

app.get("/drinks", (req, res) => {
    // res.send(drinks) // -> to check database
    res.render("drinks_index.ejs")
})

app.listen(PORT, () => {
    console.log("I am listening")
})