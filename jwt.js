'use strict'
//JSON web Token = JWT
var jwt = require('jwt-simple');//Importamos jwt, para verificar el token
var moment = require('moment');//Importamos libreria moment, que comprobara entre 2 fechas
var secret= 'clave_secreta';

//Devolvera los datos del usuario, cuando el token sea correcto en middlewares
exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),//fecha en formato timestamp, inicio
        exp: moment().add(30, 'days').unix//fecha en formato timestamp, final
    };
    return jwt.encode(payload, secret);
    //ciframos el payload, que es el objeto del usuario, le pasamos una clave secreta
};