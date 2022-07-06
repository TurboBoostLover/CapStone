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

const {message} = require('./controller')
app.post("/message", message);







const port = process.env.PORT || 6900

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})