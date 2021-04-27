const express = require('express')
const app = express()
const path = require('path')
const boderParser = require('body-parser')
const cors = require('cors')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
    console.log(process.env.PAYSTACK_SECRET_KEY, 'env')
}

app.use(cors())
app.use(boderParser.json())

const payRoute = require('./routes/pay')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use(payRoute)

app.use('/', (req, res) => {
    res.render('index', {title: 'iPAY'})
})

app.listen(3000, () => {
    console.log('app is running')
})