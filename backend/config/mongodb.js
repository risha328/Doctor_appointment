import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('connected', () => console.log("Database Connected Successfully"));
        mongoose.connection.on('error', (err) => console.error(`Database Connection Error: ${err.message}`));
    } catch (error) {
        console.error(`Connection Failed: ${error.message}`);
        process.exit(1); // Exit process if connection fails
    }
};

export default connectDB;


// Do not use '@' symbol in your databse user's password else it will show an error.