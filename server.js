//////////////////////
// GitPub app
//////////////////////

require("dotenv").config()

const express = require("express")
const app = express()
const PORT = 3000

//Set the 'drinks database' to a variable in server.js
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")


app.get("/", (req, res) => {
    // res.send("Welcome to the GitPub App!")
    res.send(`
            <h1>Welcome to the GitPub App!</h1> <br>
            <a href="/drinks/">Drink menu</a> <br><br>
            <a href="/food/">Food menu</a>
            <style type="text/css">
        * {
            color: blanchedalmond;
            background-color: steelblue;
        }
            </style>
            `)
})


// index route - show all of the drinks
app.get("/drinks/", (req, res) => {
    // res.send(drinks) // -> to check database
    res.render("drinks_index.ejs", {allDrinks: drinks})
})

app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {drink: drinks[req.params.id]})
})

app.get("/food/", (req, res) => {
    res.render("food_index.ejs", {allFood: food})
})

app.get("/food/:id", (req, res) => {
    res.render("food_show.ejs", {meal: food[req.params.id]})
})

app.listen(PORT, () => {
    console.log("I am listening")
})