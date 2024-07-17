import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
        dishId: {
            type : String,
            unique: true,
        },
        dishName: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },{timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;