import { food } from '../models/foods.js'

export const getallFoods = async (req, res) => {
	const foods = await food.find()
	res.send(foods)
}
