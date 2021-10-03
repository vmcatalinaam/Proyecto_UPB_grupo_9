function validar_nombre_usuario(string){
    if(string.startsWith(" ") == false && string.endsWith(" ") == false){ 
        if(string.search(/[^0-9]/) == 0){ 
            if(string.search(/ /) != -1){ 
                if(string.search(/ [A-Z]/) != -1){ 
                    return true;
                }else{
                    return false;
                }
            }else{
                return string.startsWith(string[0].toUpperCase());
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function validar_edad_usuario(edad){
    if(typeof edad == 'number' &&  edad > 13 && edad < 110){
        
    }else{
        return true;
    }
}

function validar_contrasena(string) {
    if (/^[A-Za-z0-9]+$/.test(string) == true && string.length >= 6 ) {
        return true;
    }else{
        return false;
    }
}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contrasena = validar_contrasena;
