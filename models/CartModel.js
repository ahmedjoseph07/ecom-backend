import mongoose from 'mongoose';

const { Schema } = mongoose;

const CartSchema = new Schema({
    productID: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    color: { type: String },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    size: { type: String },
});

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
