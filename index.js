const express = require('express')
const app = express()
const path = require('path')
const boderParser = require('body-parser')
const cors = require('cors')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

app.use(cors())
app.use(boderParser.json())

const payRoute = require('./routes/pay')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use(payRoute)

app.post('/', (req, res) => {
    const amount = req.body.amount
    res.render('index', {title: 'iPAY', amount: amount})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('app is running')
})