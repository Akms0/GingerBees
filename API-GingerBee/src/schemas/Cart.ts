import { mongoose } from "../database/config";

const CartSchema = new mongoose.Schema({
  Products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
    require: false,
  }],
})

const Cart = mongoose.model('Cart', CartSchema);

export { Cart }