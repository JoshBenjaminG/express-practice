import express from 'express';

import ejs from 'ejs';

const app = express();



ejs.delimiter = '?';
app.set('view engine', 'ejs');

app.use(express.static('public'));




const dogs = [
		{
			"name": "dog 1",
			"age": 10,
			"color": "orange",
			"adopted": true
		},
		{
			"name": "king doggo",
			"age": 5,
			"color": "black",
			"adopted": true
		},
		{
			"name": "shameless dog",
			"age": 1,
			"color": "blue",
			"adopted": false
		}
	]

app.get('/', function(req, res) {
	res.render('home', {dogs});
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/dogs/:id', function(req, res) {
	const id = req.params.id;
	const dog = dogs[id];
	res.render('dogDetail', {dog});
});

app.use(function(req, res) {
	res.status(404).render('404');
})

app.listen(1990);