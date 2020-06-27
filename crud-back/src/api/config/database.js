import mongoose from 'mongoose';



class Database {

    conectar() {
        mongoose.connect("mongodb://localhost:27017/crud2",{useNewUrlParser: true, useUnifiedTopology: true});
    }

    mongoose() {
        return mongoose;
    }
}

export default new Database();