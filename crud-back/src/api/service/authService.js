
import UsuarioSchema from '../model/usuario';
import jwt from 'jsonwebtoken';
import  bcrypt  from 'bcrypt';

class AuthService {


    registrar(usuario) {
        const { senha } = usuario;
        usuario.senha = bcrypt.hashSync(senha ,10);
        console.log(usuario.senha);
        return UsuarioSchema.create(usuario);
    
    }

    autenticar(usuario) {
        return UsuarioSchema.findOne({nome: usuario.nome}).then( usuarioDB => {
            if (usuarioDB) { 
                const sucesso = bcrypt.compareSync(usuario.senha,usuarioDB.senha);
                if(sucesso) {
                    const jwtPayload = usuarioDB;    
                    const secret = process.env.JWT_SECRET;
                    const userData = {
                        _id: usuarioDB._id,
                        nome: usuarioDB.nome,
                        token: jwt.sign({jwtPayload:jwtPayload._id}, secret, {expiresIn: 100000000})
                    }
                    return userData;
                }
           
            }
            return null;
        }).catch(err => {
            return err;
        });
        
       
    }


}


export default new AuthService();