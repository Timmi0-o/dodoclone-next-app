import mongoose from 'mongoose'

const URL = 'mongodb://localhost:27017/dodopizza'

export const connectDB = async () => {
	try {
		const db = await mongoose.connect(URL)
		return db
	} catch {
		console.log('Ошибка в подключении DB')
	}
}
