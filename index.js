import express from 'express';

const app = express();

app.get('/', function(req, res) {
	console.log('home');
	res.send('homepage');
})

app.listen(1990);