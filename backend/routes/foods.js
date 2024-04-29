import express from 'express'
import { getallFoods } from '../controllers/getallFoods.js'

export const router = express.Router()

router.get('/', getallFoods)
