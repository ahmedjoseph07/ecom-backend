import express from 'express';
import { getUserOTP, verifyLogin, userLogout, createProfile, updateProfile, readProfile, saveWishList, removeWishList, getWishList, saveCartList, removeCartList, getCartList } from '../controllers/userController.js';

const router = express.Router();

router.get('/UserOTP/:email', getUserOTP);
router.get('/VerifyLogin/:email/:otp', verifyLogin);
router.get('/UserLogout', userLogout);
router.post('/CreateProfile', createProfile);
router.post('/UpdateProfile', updateProfile);
router.get('/ReadProfile', readProfile);
router.post('/SaveWishList', saveWishList);
router.post('/RemoveWishList', removeWishList);
router.get('/WishList', getWishList);
router.post('/SaveCartList', saveCartList);
router.post('/RemoveCartList', removeCartList);
router.get('/CartList', getCartList);

export default router;