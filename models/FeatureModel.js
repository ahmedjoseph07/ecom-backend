import mongoose from 'mongoose';

const { Schema } = mongoose;

const FeatureSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    
});

const Feature = mongoose.model('Feature', FeatureSchema);


export default Feature;