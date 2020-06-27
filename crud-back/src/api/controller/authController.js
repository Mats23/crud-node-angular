import authService from "../service/authService";
import multiparty from "multiparty";

class AuthController {


    async login(req, res) {
        const { body } = req;

        const authData = await authService.autenticar(body);
        if(authData != null) {
            return res.json({status: 200, data: authData});
        }

        return res.json({status:200, mensagem: "Usuário ou senha invalidos"});
    }

    async cadastro(req, res) {
        const { body } = req;
        try {
            console.dir(body)
            const usuario = await authService.registrar(body);
            if(usuario != null) {
                return res.json({status: 200, data: usuario});
            }
        } catch(err) {
            console.dir(err);
            return res.json({status: 500, message:err});
        }
            
    }

}




export default new AuthController();