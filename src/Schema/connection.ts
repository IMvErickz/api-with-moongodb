import mongoose from 'mongoose';
import 'dotenv/config'

const databaseUrl = String(process.env.DATABASE_URL)

export const db = async () => {
    await mongoose.connect(databaseUrl);
}

