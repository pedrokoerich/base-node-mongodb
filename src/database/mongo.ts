import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const db = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await connect(process.env.MONGO_URL! as string)

        console.log("MongoDB connected successfully!");
    } catch (erro)  {
        console.log("Error connecting to MongoDB:", erro);
    }
}