import express from 'express';
import {getProductBrandList,getProductCategoryList,getProductSliderList,getProductListByBrand,getProductListByCategory,getProductListBySmilier,getProductListByKeyword,getProductListByRemark,getProductDetails,getProductReviewList} from '../controllers/productController.js';

const router = express.Router();

router.get('/ProductBrandList', getProductBrandList);
router.get('/ProductCategoryList', getProductCategoryList);
router.get('/ProductSliderList', getProductSliderList);
router.get('/ProductListByBrand/:BrandID', getProductListByBrand);
router.get('/ProductListByCategory/:CategoryID', getProductListByCategory);
router.get('/ProductListBySmilier/:CategoryID', getProductListBySmilier);
router.get('/ProductListByKeyword/:Keyword', getProductListByKeyword);
router.get('/ProductListByRemark/:Remark', getProductListByRemark);
router.get('/ProductDetails/:ProductID', getProductDetails);
router.get('/ProductReviewList/:ProductID', getProductReviewList);

export default router;
