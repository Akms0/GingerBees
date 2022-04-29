import { mongoose } from "../database/config";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: { 
    type: String, 
    require: true,
    unique: true,
    lowercase: true,
  },
  password: { 
    type: String, 
    require: true,
    select: false,
  },
  cart: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
    require: false,
  },
})

const User = mongoose.model('User', UserSchema);

export { User }