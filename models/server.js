const express = require('express');
const cors = require('cors')




class Server {

constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/users'

    //midllwears
    this.middlewaers(); 
    
    //lectura y parsero del body
    this.app.use(express.json());
    //rutas de mi aplicacionj
    this.routs();
}
middlewaers(){
    //cors
    this.app.use(cors());

    this.app.use( express.json())
    this.app.use(express.static ('public'));

}

routs(){    
   
    this.app.use(this.usuariosPath,require( '../routes/users'))
}


listen(){
    
this.app.listen(this.port,()=>{
    console.log(`servidor corriendo en el puerto ${this.port}`);
}); 

}

}

module.exports = Server