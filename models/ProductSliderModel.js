import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSliderSchema = new Schema({

    title: { type: String, required: true },
    des: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    productID: { type: Schema.Types.ObjectId, ref: 'Product', required: true },

})

const ProductSlider = mongoose.model('ProductSlider', ProductSliderSchema);


export default ProductSlider;