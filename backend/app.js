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