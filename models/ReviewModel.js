import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReviewSchema = new Schema({

    productID: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    des: { type: String, required: true },
    rating: { type: Number, required: true },

});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
