const { default: produtoService } = require("../service/produtoService");
import multiparty from 'multiparty';
import fs from 'fs';
import multipart from "connect-multiparty";

class ProdutoController {


    async index(req, res) {
        const { limit, skip } = req.params;
        console.dir(limit);
        try {
            const produtos =  await produtoService.find(limit,skip);
            const total = await produtoService.count();
            return res.json({status: 200, data:produtos, total:total})

        } catch(err) {
            console.dir(err);
            return res.json({status: 500, data: err});
        }
        
    }


    async file(req, res) {
        
        try {
            const { body } = req;
            const path = req.files.image.path;
            const produto = {
                nome: body.nome,
                preco: body.preco,
                imagem: path
            };
            console.dir(produto);
            const produtoSalvo = await produtoService.store(produto);
            return  res.json({status: 200, data: produtoSalvo});

        } catch(err) {
            return res.json({status: 500, data: err});
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const produtoDeletado = await produtoService.delete(id);
            console.dir(produtoDeletado);
            return res.json({status: 200, data:produtoDeletado}); 
            
        } catch(err) {
            console.dir(err);
            return res.json({status: 500, data: err});
        }
    }

}



export default new ProdutoController();