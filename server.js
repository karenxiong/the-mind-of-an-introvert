import "babel-polyfill"
import path from 'path'
import express from 'express'

var app = express()
app.set('port', (process.env.PORT || 5000))

// Allow access static stuff
app.use(express.static('build'))

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/build/index.html')
})

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'))
})