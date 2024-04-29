import express from 'express'
import { router as foodsRouter } from './foods.js'

export const router = express.Router()

router.use('/foods', foodsRouter)
