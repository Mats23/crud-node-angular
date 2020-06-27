import jwt from 'jsonwebtoken';
import util from 'util'; 
import dotenv from 'dotenv';



class Auth {

    constructor() {
        dotenv.config()
    }
    async verify(req, res, next) {

        if(req.originalUrl == "/login") {
            return next();
        }
        const { authorization } = req.headers;
        if (!authorization) {
            return res.json({status:404, message:"Token not provided"});
        }

        const [, token] = authorization.split(' ');
        try {
            
            const decoded = await util.promisify(jwt.verify)(token,process.env.JWT_SECRET);
            return next();
        } catch(err) {
            console.dir(err);
            return res.json({status:500, message:err});
        }
    }
}


export default new Auth();