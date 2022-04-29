import { Request, Response } from "express";
import { Products } from "../schemas/Products";

interface IProducts{
  _id?: string;
  name: string;
  preco: number;
}

class ProductsControllers {
  /* Metodo responsavel por armazenar um usuario
  *   JSON: {
  *	    	 "name": "<Saito Kiba>",
  *        "email": "<saitokiba@gmail.com>",
  *        "password": "<123>"
  *   }
  *   
  * 
  */


  /* Metodo responsavel por buscar um usuario com email */
  public async findProductByName(nome: string){

    const product = await Products.findOne({nomeProduto: nome});
    //Aqui tá normal :D
    return product;
  }

  

  
  async listProduct(request: Request, response: Response){
    try {
      const product = await Products.find();
      console.log(product);
      return response.send(product);
    }catch (err) {
      response.status(400).json({ error: err.message, message: "Found Nothing :'("});
    }
  }
}

export { ProductsControllers };