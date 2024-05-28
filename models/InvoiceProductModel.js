import mongoose from 'mongoose';

const { Schema } = mongoose;

const InvoiceProductSchema = new Schema({

    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    productID: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    invoiceID: { type: Schema.Types.ObjectId, ref: 'Invoice', required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    color: { type: String },
    size: { type: String },

})

const InvoiceProduct = mongoose.model('InvoiceProduct', InvoiceProductSchema);


export default InvoiceProduct;
