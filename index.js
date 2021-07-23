const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = express()

app.use(morgan('dev')) //biblioteca de logs no console
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/model/index')
require('./src/index')(app)

app.listen(9000, () => {
	console.log('Express has been ignite')
})