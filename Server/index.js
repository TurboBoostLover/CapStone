require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

app.get('/js2', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.js'))
})

app.get('/js3', (req, res) => {
    res.sendFile(path.join(__dirname, '../list.js'))
})

app.get('/js4', (req, res) => {
    res.sendFile(path.join(__dirname, '../selling.js'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.html'))
})

app.get('/buy', (req, res) => {
    res.sendFile(path.join(__dirname, '../list.html'))
})

app.get('/selling', (req, res) => {
    res.sendFile(path.join(__dirname, '../selling.html'))
})

const {message, homes, gethomes} = require('./controller')
app.post("/message", message)
app.post("/homes", homes)
app.get("/homesForSale", gethomes)

const zillow = document.querySelector('#zillow')
const realtor = document.querySelector('#realtor')

const address = () => {
    window.location.href=("https://www.zillow.com/")
}

const address2 = () => {
    window.location.href=("https://www.realtor.com/")
}

zillow.addEventListener('click', address)
realtor.addEventListener('click', address2)


const port = process.env.PORT || 6900

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})