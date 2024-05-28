import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({

    categoryName: { type: String, required: true },
    categoryImg: { type: String, required: true },
    
});

const Category = mongoose.model('Category', CategorySchema);


export default Category;
