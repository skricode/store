import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type : Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {timestamps: true //createdAt, updatedAt shows it
});
const Product = mongoose.model('Product', productSchema); //auto makes products collection in mongodb
export default Product;