let registros=[];
function validar_captcha(rcaptcha){

    if (rcaptcha.includes("á") || rcaptcha.includes ("Á") ) {
        rcaptcha=rcaptcha.replace("á", "a");
        rcaptcha=rcaptcha.replace("Á", "A");
    }

    if (rcaptcha.toUpperCase()=="BOGOTA"){
        //alert("bueno");    
        return true;
    }else{
        //alert("malo"); 

        return false;
    }
}



function iniciar_sesion(usuario, contrasena, rcaptcha){

    let captcha_validado=validar_captcha(rcaptcha);
    
    for (let i = 0; i < registros.length  ; i++) {
            
        if (registros[i].usuario==usuario && registros[i].contrasena==contrasena && captcha_validado){
            //alert ("el usuario y contraseña existe y el captcha esta bueno");
            return true;
        }else{
            //alert ("algo fallo")
            return false;
        }

    }


}
module.exports.registros=registros;
module.exports.validar_captcha=validar_captcha;
module.exports.iniciar_sesion=iniciar_sesion;