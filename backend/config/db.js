import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://roshiniimutyala:%40roshini0108@cluster0.7st2vcb.mongodb.net/food-del?retryWrites=true&w=majority"
        );
        console.log("✅ DB Connected");
    } catch (error) {
        console.error("❌ DB Connection Error:", error.message);
        process.exit(1);
    }
};
