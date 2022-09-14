import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })
    return res.json(games)
})

app.post('/ads', (req, res) => res.status(201).json([]))

app.get('/games/:id/ads', (req, res) => res.json([]))

app.get('/ads/:id/discord', (req, res) => res.json([]))

app.listen(3333)