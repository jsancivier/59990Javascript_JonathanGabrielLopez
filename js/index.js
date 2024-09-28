function registroUsuario(){   

    let nombreUsuario = prompt("Por favor, ingresé su nombre");
    let documentoPersonal;
    let claveUsuario;
    
    while(true){ 
        documentoPersonal = parseInt(prompt("Por favor, ingresé su número de DNI sin puntos o espacios"));
        if(!isNaN(documentoPersonal) && documentoPersonal >= 999999){
            alert('Documento ingresado correctamente');
            break
        }
        else{
            alert('Documento incorrecto, favor intente de nuevo')
        }
    }
    while(true){

        claveUsuario = parseInt(prompt("Por favor, ingresé su clave personal, la misma solo debe contener números. No debe tener 4 números iguales"));
        if(isNaN(claveUsuario) || claveUsuario <=0 || claveUsuario === 1111 || claveUsuario === 2222 || claveUsuario === 3333 || claveUsuario === 4444 || claveUsuario === 5555 || claveUsuario === 6666 || claveUsuario === 7777 || claveUsuario === 8888 || claveUsuario === 9999 ){
            alert('La clave no cumple con los parámetros');
        }
        
        else{
            alert('Clave generada de manera exitosa');
            break
        }
    }

console.log(nombreUsuario)
console.log(documentoPersonal)
console.log(claveUsuario)


}

registroUsuario();
