import { Request, Response } from "express";
import { ProductsControllers } from "../controllers/ProductsControllers";
import { UserController } from "../controllers/UserControllers"
import { Cart } from "../schemas/Cart";
import { User } from "../schemas/User";

class CartControllers {
  /* Metodo responsavel por armazenar Boards
  *   JSON: {
  *	    "title": "<titulo>",
 	*     "userId": "<id do usuario que criou o board"
  *   }
  *   
  *  Return: board criado, usuario que criou o board e mensagem
  */

  /* Metodo para listar as tasks de um board */


  async addProduct(nome: string, carts:string){
    const productController = new ProductsControllers();
    
    const product = await productController.findProductByName(nome);
    //Tá tudo certo aqui:D 
    const cart = await Cart.findByIdAndUpdate(carts, {$push:{Products: product}}, {new: true});
    //Tá tudo certo aqui :X
    return cart;
  }

  async createCart(){
    const cart = new Cart({});
  try{
      await cart.save(); 
      return cart;
    }catch(err){
        return "Sinto muito, deu muito ruim.";
    }}


  async listProducts(request: Request, response: Response){ 
    try {
      const  id = request.params.boardId;
     
      const cart = await Cart.findOne({_id: id}).populate('Products');
      return response.json( cart );
    }catch (err) {
      response.status(400).json({ error: err.message, message: "Nothing Found"});
    }
  }
  
}

export { CartControllers };