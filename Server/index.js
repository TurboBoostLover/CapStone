require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/index.js'))
})

app.get('/js2', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/about.js'))
})

app.get('/js3', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/list.js'))
})

app.get('/js4', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/selling.js'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/about.html'))
})

app.get('/buy', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/list.html'))
})

app.get('/selling', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/selling.html'))
})

const {message, homes, gethomes} = require('./controller')
app.post("/message", message)
app.post("/homes", homes)
app.get("/homesForSale", gethomes)

const port = process.env.PORT || 6900

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})