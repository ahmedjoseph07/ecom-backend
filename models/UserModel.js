import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({

    email: { type: String, required: true, unique: true },
    otp: { type: Number, required: true },

})

const User = mongoose.model('User', UserSchema)

export default User;