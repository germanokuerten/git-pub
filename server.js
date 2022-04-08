const express = require("express")
const app = express()
const PORT = 3000

//Set the 'drinks database' to a variable in server.js
const drinks = require("./models/drinks.js")


app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!")
})

// index route - show all of the drinks
app.get("/drinks/", (req, res) => {
    // res.send(drinks) // -> to check database
    res.render("index.ejs", {allDrinks: drinks})
})

app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})

app.listen(PORT, () => {
    console.log("I am listening")
})