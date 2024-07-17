import Listing from "../models/listing.model.js";

export const getListing = async (req, res) => {
    try{
        const dishes = await Listing.find();
        res.json(dishes);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};