import { Router, Request, Response  } from "express";
import { CartControllers } from "./controllers/CartControllers";
import { ProductsControllers } from "./controllers/ProductsControllers";
import { UserController } from "./controllers/UserControllers";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";
import { Authenticate } from "./services/Authenticate";
const router = Router();

const userController = new UserController();
const authenticate = new Authenticate();
const cartController = new CartControllers();
const productController = new ProductsControllers();
/*
*   GET     => Buscar uma informacao
*   POST    => Inserir (criar) uma informacao
*   PUT     => Alterar uma informacao
*   DELETE  => Remover um dado 
*   PATCH   => Alterar uma informacao especifica
*/

/* Rota teste */
router.get('/', (req: Request, res: Response) => {
  return res.json({message: "It's Okay"});
});

router.post('/user', userController.store)
router.get('/products', productController.listProduct)
router.post('/products', userController.addProduct)
router.get('/listUser', userController.listUsers)


router.post('/login', authenticate.login);

export { router }
