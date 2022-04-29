import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Akms:Assinatura1!@cluster0.txkb0.mongodb.net/GingerBees?retryWrites=true&w=majority")
mongoose.Promise = global.Promise;

export { mongoose }