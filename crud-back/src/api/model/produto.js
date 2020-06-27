const { Schema } = require("mongoose");
import {Schema, model} from 'mongoose';



const ProdutoSchema = new Schema({
    nome: { type: String, required: true},
    preco: { type: Number, required: true},
    imagem: { type: String}
}, {timestamps: true});



export default model("Produto", ProdutoSchema);