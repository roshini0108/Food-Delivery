import FoodModel from "../models/foodModel.js";

// Add food
const addFood = async (req, res) => {
    try {
        const food = new FoodModel({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file ? req.file.filename : null,
        });

        await food.save();
        res.json({ success: true, message: "Food added successfully!" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// List food
const listFood = async (req, res) => {
    try {
        const foods = await FoodModel.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const { id } = req.params;
        await FoodModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Food removed successfully!" });
        fs.unlink(`uploads/${food.image}`, () => { })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export { addFood, listFood, removeFood };
