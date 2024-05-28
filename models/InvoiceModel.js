import mongoose from 'mongoose';

const { Schema } = mongoose;

const InvoiceSchema = new Schema({

    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    payable: { type: Number, required: true },
    cus_details: { type: String, required: true },
    ship_details: { type: String, required: true },
    tran_id: { type: String, required: true },
    val_id: { type: String, required: true },
    payment_status: { type: String, required: true },
    delivery_status: { type: String, required: true },
    total: { type: Number, required: true },
    vat: { type: Number, required: true },

});


const Invoice = mongoose.model('Invoice', InvoiceSchema);


export default Invoice;
