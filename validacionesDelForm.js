
function validar_usuario() {
    var string = document.getElementById("dato_nombre_usuario").value;
    var edad=document.getElementById("dato_edad_usuario").value;
    var string1=document.getElementById("dato_contrasena").value;
    if(string.startsWith(" ") || string.endsWith(" ")){ 
        alert("Has comenzado o terminado con espacio y no es permitido");
        document.getElementById("dato_nombre_usuario").focus();
        document.getElementById("dato_nombre_usuario").value="";
    }else{   
        if(string.search(/[^0-9]/)){ 
            alert("Has ingresado numeros o no has escrito nada y no esta permitido");
            document.getElementById("dato_nombre_usuario").focus();
            document.getElementById("dato_nombre_usuario").value="";
        }else{
             if(string.search(/ [A-Z]/) != -1){ 
                if(edad > 13 && edad < 110){
                   if (/[A-Za-z0-9]+$/.test(string1) == true && string1.length >= 6 ) {
                        location.href ="postregistro.html";
                    }else{
                        alert("La contraseña indicada no cumple con los parametros, debe contener letras, numeros o ambas y minimo 6 caracteres")
                        document.getElementById("dato_contrasena").focus();
                        document.getElementById("dato_contrasena").value="";
                    }
                }else{
                    alert ("No has ingresado una edad valida");
                    document.getElementById("dato_edad_usuario").focus();
                    document.getElementById("dato_edad_usuario").value="";    
                }  
             }else{
                alert("Debes comenzar las palabras con mayuscula y minimo 2 nombres o nombre y apellido");
                document.getElementById("dato_nombre_usuario").focus();
                document.getElementById("dato_nombre_usuario").value="";
             }
        }
    }
}
