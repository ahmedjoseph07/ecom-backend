import User from '../models/UserModel.js';
import Profile from '../models/ProfileModel.js';
import Cart from '../models/CartModel.js';
import Wish from '../models/WishModel.js';

export const getUserOTP = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ otp: user.otp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const verifyLogin = async (req, res) => {
    const { email, otp } = req.params;
    try {
        const user = await User.findOne({ email, otp });
        if (!user) {
            return res.status(401).json({ message: 'Invalid OTP' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const userLogout = async (req, res) => {

    res.status(200).json({ message: 'Logout successful' });
};

export const createProfile = async (req, res) => {
    const { userID, cus_add, cus_city, cus_country, cus_fax, cus_name, cus_phone, cus_postcode, cus_state, ship_add, ship_city, ship_country, ship_name, ship_phone, ship_postcode, ship_state } = req.body;
    try {
        const profile = new Profile({ userID, cus_add, cus_city, cus_country, cus_fax, cus_name, cus_phone, cus_postcode, cus_state, ship_add, ship_city, ship_country, ship_name, ship_phone, ship_postcode, ship_state });
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProfile = async (req, res) => {
    const { userID } = req.body;
    try {
        const profile = await Profile.findOneAndUpdate({ userID }, req.body, { new: true });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const readProfile = async (req, res) => {
    const { userID } = req.body;
    try {
        const profile = await Profile.findOne({ userID });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const saveWishList = async (req, res) => {
    const { productID, userID } = req.body;
    try {
        const wish = new Wish({ productID, userID });
        await wish.save();
        res.status(201).json(wish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeWishList = async (req, res) => {
    const { productID, userID } = req.body;
    try {
        await Wish.findOneAndDelete({ productID, userID });
        res.status(200).json({ message: 'Wish list item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getWishList = async (req, res) => {
    const { userID } = req.body;
    try {
        const wishes = await Wish.find({ userID }).populate('productID');
        res.status(200).json(wishes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const saveCartList = async (req, res) => {
    const { productID, userID, color, price, qty, size } = req.body;
    try {
        const cart = new Cart({ productID, userID, color, price, qty, size });
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeCartList = async (req, res) => {
    const { productID, userID } = req.body;
    try {
        await Cart.findOneAndDelete({ productID, userID });
        res.status(200).json({ message: 'Cart item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCartList = async (req, res) => {
    const { userID } = req.body;
    try {
        const cartItems = await Cart.find({ userID }).populate('productID');
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
