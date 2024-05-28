import Product from '../models/ProductModel.js';
import Brand from '../models/BrandModel.js';
import Review from '../models/ReviewModel.js';
import Category from '../models/CatagoryModel.js';
import ProductSlider from '../models/ProductSliderModel.js';

export const getProductBrandList = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductCategoryList = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductSliderList = async (req, res) => {
    try {
        const sliders = await ProductSlider.find();
        res.status(200).json(sliders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductListByBrand = async (req, res) => {
    const { BrandID } = req.params;
    try {
        const products = await Product.find({ brandID: BrandID });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductListByCategory = async (req, res) => {
    const { CategoryID } = req.params;
    try {
        const products = await Product.find({ categoryID: CategoryID });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductListBySmilier = async (req, res) => {
    const { CategoryID } = req.params;
    try {
        const products = await Product.find({ categoryID: CategoryID }).limit(5);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductListByKeyword = async (req, res) => {
    const { Keyword } = req.params;
    try {
        const products = await Product.find({ title: { $regex: Keyword, $options: 'i' } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductListByRemark = async (req, res) => {
    const { Remark } = req.params;
    try {
        const products = await Product.find({ remark: { $regex: Remark, $options: 'i' } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductDetails = async (req, res) => {
    const { ProductID } = req.params;
    try {
        const product = await Product.findById(ProductID).populate('categoryID').populate('brandID');
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductReviewList = async (req, res) => {
    const { ProductID } = req.params;
    try {
        const reviews = await Review.find({ productID: ProductID }).populate('userID');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
