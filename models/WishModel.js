import mongoose from 'mongoose';

const { Schema } = mongoose;

const WishSchema = new Schema({

    productID: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },

});

const Wish = mongoose.model('Wish', WishSchema);


export default Wish;
