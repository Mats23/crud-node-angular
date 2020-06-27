const { Schema, model } = require("mongoose");



const UsuarioSchema = new Schema({
    nome: String,
    senha: String
}, {timestamps: true});


export default model('Usuario', UsuarioSchema);