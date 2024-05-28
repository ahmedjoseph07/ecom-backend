import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductDetailSchema = new Schema({

    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    des: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    productID: { type: Schema.Types.ObjectId, ref: 'Product', required: true },

});

const ProductDetail = mongoose.model('ProductDetail', ProductDetailSchema);


export default ProductDetail;