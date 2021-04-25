const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res) => {
    res.render('index', {title: 'iPAY'})
})

app.listen(3000, () => {
    console.log('app is running')
})