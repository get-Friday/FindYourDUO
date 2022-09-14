import express from 'express'

const app = express()

app.get('/games', (req, res) => res.json([]))

app.post('/ads', (req, res) => res.status(201).json([]))

app.get('/games/:id/ads', (req, res) => res.json([]))

app.get('/ads/:id/discord', (req, res) => res.json([]))

app.listen(3333)