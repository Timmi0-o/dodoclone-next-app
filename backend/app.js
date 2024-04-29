import cors from 'cors'
import express from 'express'
import { connectDB } from './db.js'
import { router } from './routes/index.js'

const app = express()

const server = async () => {
	try {
		await connectDB()
		console.log('Подключено к MongoDB')
		app.listen(4000, () => {
			console.log('Сервер подключен к порту 4000 [работает]')
		})
	} catch {
		console.error('Error connecting to MongoDB:', error.message)
		process.exit(1)
	}
}
server()

app.use(cors())
app.use(express.json())
app.use(router)

// const article = await food.create([
// 	{
// 		isNew: true,
// 		title: 'Омлет с ветчиной и грибами',
// 		description:
// 			'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла',
// 		weight: 110,
// 		price: 199,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 14,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: true,
// 		title: 'Омлет с беконом',
// 		description:
// 			'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
// 		weight: 130,
// 		price: 199,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 39,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: true,
// 		title: 'Омлет сырный',
// 		description:
// 			'Горячий завтрак из омлета с поджаристой корочкой, моцарелла, кубики брынзы, сыры чеддер и пармезан',
// 		weight: 100,
// 		price: 199,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 6,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Омлет с грибами и сыром',
// 		description: 'Аппетитный омлет с поджаренными шампиньонами и сыром',
// 		weight: 120,
// 		price: 189,
// 		isForTwo: false,
// 		isHit: true,
// 		allShop: 21,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Яичница с помидорами',
// 		description: 'Питательная яичница с помидорами на завтрак',
// 		weight: 100,
// 		price: 179,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 30,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Блины с маслом и медом',
// 		description: 'Нежные блинчики подаются с маслом и натуральным медом',
// 		weight: 150,
// 		price: 159,
// 		isForTwo: true,
// 		isHit: false,
// 		allShop: 18,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Творожники',
// 		description: 'Вкусные творожные оладьи с добавлением изюма',
// 		weight: 120,
// 		price: 179,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 25,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Гречневая каша',
// 		description:
// 			'Питательная гречневая каша на завтрак с добавлением меда или сгущенного молока',
// 		weight: 200,
// 		price: 169,
// 		isForTwo: false,
// 		isHit: true,
// 		allShop: 10,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Фруктовый салат',
// 		description: 'Освежающий фруктовый салат с добавлением ягод и меда',
// 		weight: 180,
// 		price: 189,
// 		isForTwo: true,
// 		isHit: false,
// 		allShop: 14,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Тосты с джемом',
// 		description: 'Хрустящие тосты подаются с натуральным джемом на завтрак',
// 		weight: 120,
// 		price: 149,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 29,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Яблочный пирог',
// 		description: 'Ароматный яблочный пирог с корицей и сахарной пудрой',
// 		weight: 200,
// 		price: 199,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 12,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Оладьи с вишней',
// 		description: 'Нежные оладьи с добавлением сладкой вишни',
// 		weight: 150,
// 		price: 179,
// 		isForTwo: true,
// 		isHit: false,
// 		allShop: 22,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Каша овсяная',
// 		description:
// 			'Питательная овсяная каша с добавлением меда или сгущенного молока',
// 		weight: 200,
// 		price: 159,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 15,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Фреш апельсиновый',
// 		description: 'Освежающий апельсиновый фреш на завтрак',
// 		weight: 250,
// 		price: 139,
// 		isForTwo: true,
// 		isHit: false,
// 		allShop: 28,
// 		group: 'ObjectId("662297786531c6dc92abd0b0")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Пепперони',
// 		description:
// 			'Классическая пицца с пикантным пепперони, сыром моцарелла и томатным соусом',
// 		weight: 120,
// 		price: 229,
// 		isForTwo: false,
// 		isHit: true,
// 		allShop: 25,
// 		group: 'ObjectId("662297786531c6dc92abd0b1")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Маргарита',
// 		description:
// 			'Простая и вкусная пицца с томатами, сыром моцарелла и свежей базиликом',
// 		weight: 130,
// 		price: 199,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 32,
// 		group: 'ObjectId("662297786531c6dc92abd0b1")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Гавайская',
// 		description:
// 			'Пицца с ананасами, ветчиной и сыром моцарелла, созданная для любителей необычных сочетаний',
// 		weight: 140,
// 		price: 239,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 18,
// 		group: 'ObjectId("662297786531c6dc92abd0b1")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Четыре сыра',
// 		description:
// 			'Изысканная пицца с сочетанием четырех видов сыра: моцарелла, дор блю, пармезан и чеддер',
// 		weight: 150,
// 		price: 259,
// 		isForTwo: false,
// 		isHit: true,
// 		allShop: 20,
// 		group: 'ObjectId("662297786531c6dc92abd0b1")',
// 	},
// 	{
// 		isNew: false,
// 		title: 'Вегетарианская',
// 		description:
// 			'Пицца для любителей овощей с болгарским перцем, помидорами, грибами, оливками и сыром моцарелла',
// 		weight: 160,
// 		price: 219,
// 		isForTwo: false,
// 		isHit: false,
// 		allShop: 15,
// 		group: 'ObjectId("662297786531c6dc92abd0b1")',
// 	},
// ])
