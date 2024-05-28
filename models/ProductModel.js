import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
    
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    discountPrice: { type: Number },
    image: { type: String, required: true },
    star: { type: Number },
    stock: { type: Number, required: true },
    remark: { type: String },
    categoryID: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    brandID: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },

});

const Product = mongoose.model('Product', ProductSchema);

export default Product;