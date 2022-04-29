import { mongoose } from "../database/config";

const ProductsSchema = new mongoose.Schema({
  nomeProduto: {
    type: String,
    require: true,
  },

  preco:{
    type: Number,
    require: true,
  },
})

const Products = mongoose.model('Products', ProductsSchema);

export { Products }