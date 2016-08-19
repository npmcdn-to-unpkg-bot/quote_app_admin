import express from 'express'
import mongojs from 'mongojs'
import { mongoPath, collection } from './credentials'
import { ObjectId } from 'mongodb' 

const db = mongojs(mongoPath, [collection])
const app = express()

app.post('/api/quote/:id/:status', (req, res) => {
	db.imdb.update({_id: ObjectId(req.params.id)}, 
		{$set: {status: req.params.status}}, {}, (err, doc) => {
			res.status(200).send({msg:"Status updated"})
		})
})

app.get('/api/titles', (req, res) => {
	db.imdb.distinct("movie.title", {}, (err, arr) => {
		res.status(200).send(arr)
	})
})

app.get('/api/quotes/all', (req, res) => {
	db.imdb.find({}, (err, doc) => {
		res.status(200).send(doc)
	})
})

app.get("/ping", (req, res) => {
	res.send("pong")
})

app.get('/*', express.static('public'))

app.listen(process.env.PORT || 3000)