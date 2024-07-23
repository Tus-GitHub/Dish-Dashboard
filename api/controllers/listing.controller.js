import Listing from "../models/listing.model.js";

export const getListing = async (req, res) => {
    try{
        const dishes = await Listing.find();
        res.json(dishes);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};
export const toggleButton = async (req, res) => {
    try{
        const dish = await Listing.findById(req.params.id);
        if(!dish){
            return res.status(404).json({error: 'Dish not found' });
        } 
        dish.isPublished = !dish.isPublished;
        await dish.save();
        res.json(dish);
    }catch(error){
        res.status(500).json({error: error.message });
    }
};