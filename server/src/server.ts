import express from 'express'

const app = express()

app.get('/ads', (req, res) => res.json())

app.listen(3333)