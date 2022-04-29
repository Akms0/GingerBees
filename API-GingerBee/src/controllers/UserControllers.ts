import { Request, Response } from "express";
import { Products } from "../schemas/Products";
import { User } from "../schemas/User";
import { CartControllers } from "./CartControllers"
import { ProductsControllers } from "./ProductsControllers";

interface IUser{
  _id?: string;
  name: string;
  email: string;
  password?: string;
  cart: string; 
}

class UserController {
  /* Metodo responsavel por armazenar um usuario
  *   JSON: {
  *	    	 "name": "<Saito Kiba>",
  *        "email": "<saitokiba@gmail.com>",
  *        "password": "<123>"
  *   }
  *   
  *  Return: usuario criado e mensagem
  */


  async addProduct(request: Request, response: Response){
      const { name, email } = request.body
      const user = await User.findOne({email}).select('+password');
      const cartController = new CartControllers();
      const carts = await cartController.addProduct(name, user.cart);
      return response.status(200).json(carts);
  }



  async store(request: Request, response: Response) {
      //recuperando dados do corpo da requisicao
      const { name, email, password } = request.body

     
      const cartController = new CartControllers();
      const cart = await cartController.createCart();

      //construindo usuario a ser salvo
      const user = new User({
        name,
        email,
        password,
        cart:cart._id
      })

      console.log(user);
      
    try {
    
      //salvando usuario no banco do dados
      await user.save();
      return response.status(201).json({user, message: "User added successfully"});

    } catch (err) {
      response.status(500).json({ error: err.message, message: "User not added" });
    }
  }

  /* Metodo responsavel por buscar um usuario com email */
  public async findUserByEmail(email: string): Promise<IUser>{

    const user = await User.findOne({email}).select('+password');

    return user;
  }

  
  
  async listUsers(request: Request, response: Response){
    try {
      const users = await User.find().populate("cart");

      return response.send({ users });
    }catch (err) {
      response.status(400).json({ error: err.message, message: "Nothing Found"});
    }
  }
}

export { UserController };