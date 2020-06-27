import ProdutoSchema from '../model/produto';


class ProdutoService {



    store(produto) {
        const produtoSalvo = ProdutoSchema.create(produto);

        return produtoSalvo;
    }


    find(limit, skip) {
        return ProdutoSchema.find()
        .limit(Number.parseInt(limit)).skip(Number.parseInt(skip)).sort('nome');
    }

    findById(id) {
        return ProdutoSchema.findById(id);
    }

    count() {
        return ProdutoSchema.count();
    }

    delete(id) {
        return ProdutoSchema.deleteOne({_id:id});
    }

}




export default new ProdutoService();