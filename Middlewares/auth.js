import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

const auth = async(req,res,next) =>{
    const token = req.header('Authorization')?.replace('Bearer ','');
    if(!token){
        return res.status(401).json({message:'No token found'})
    }


    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user = await User.findOne({_id:decoded._id,'tokens.token':token});

        if(!user){
            throw new Error()
        }

        req.user = user;
        req.token = token;
        next()
    } catch (error){
        res.status(401).json({message:'Not authorised to access this'})
    }
};

export default auth;