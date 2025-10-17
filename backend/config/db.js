import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URl);
        console.log('database was connected !')
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;