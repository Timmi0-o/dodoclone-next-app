import mongoose from 'mongoose'

const { Schema, model } = mongoose

const foodSchema = new Schema({
	title: String,
	description: String,
	weight: Number,
	price: Number,
	isNew: Boolean,
	isForTwo: Boolean,
	isHit: Boolean,
	allShop: Number,
	group: String,
})

export const food = model('food', foodSchema)
