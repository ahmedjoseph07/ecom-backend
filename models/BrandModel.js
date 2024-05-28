import mongoose from "mongoose";

const { Schema } = mongoose;

const BrandSchema = new Schema({
    brandname: { type: String, required: true },
    brandImg: { type: String, required: true },
})


const Brand = mongoose.model('Brand', BrandSchema)

export default Brand;