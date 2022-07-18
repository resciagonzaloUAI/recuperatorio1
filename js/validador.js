window.onload = function() {
const form = document.getElementById("formulario");
const email = document.getElementById("correo");
const email2 = document.getElementById("correo2");
const passwd = document.getElementById("pass");
const passwd2 = document.getElementById("pass2");
let resultado = false;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    var emailID = email.value;
            atpos = emailID.indexOf("@");
            dotpos = emailID.lastIndexOf(".");
            if (atpos < 1 || ( dotpos - atpos < 2 )) {
                alert("El email no es correcto");
                alert(emailID);
                document.forms["myForm"]["fmail"].focus();
                return false; }
            else {
                   let emailid2 = email2.value;
                   if (emailid2 != emailID)
                   {
                    alert("Los correos son diferentes")
                   }
                   else {
                        pass = passwd.value;
                        pass2 = passwd2.value;
                        if (pass2 == pass) {
                            alert("Todo ok!")
                            modal.style.display = "block";
                        }
                        else {
                            alert("Las contraseñas no coinciden")
                        }

                    
                   }
                }
            

    })
;

/* MODAL */
    // Get the modal
    const modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    span.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


}
;

/*
validaEmail(email,resultado)
  if (resultado === true) {
    validaEmail2(email,email2,resultado)
    if (resultado === 'true'){
        alert("Ok")
    }
    else (
        alert("Los correos no coinciden")
    )
  } else {
    alert ("El email ingresado no es correcto")
    console.log(resultado)
  }

console.log(resultado);




function validaEmail (email,resultado) {
    let x = email.value;
    let longitudn = x.length;
    console.log(x)
    console.log(longitudn)
    if (longitudn > 3 ) {
        resultado = true;
        return resultado;
  }
    else {
        alert("El email no es correcto");
        alert(email);
        resultado = false;
        return resultado; 
    }

}

function validaEmail2 (email, email2,resultado) {
if (email != email2) {
    alert("Los correos no coinciden");
    alert(email);
    resultado = false;
    return resultado;}
    else {
        let resultado= true;
        return resultado;
    }
}

*/

/*
    // Get the modal
    const modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    span.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
;*/


/*form.addEventListener("submit", (e) => {
    e.preventDefault();
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("El email no es correcto");
        alert(email);
        document.forms["myForm"]["fmail"].focus();
        return false; }
        else {
            if (email != email2) {
                alert("Los correos no son iguales");
                alert(email, email2);
                document.forms["myForm"]["fmail"].focus();
                return false; }
        }

    
    
    
    })
    ;
    */
    /*validaEmail(email);
    if (successStatus) {
        validaEmail2(email, email2);
        if (successStatus) {
            validaPasswd(passwd);
            if (successStatus){
                validaPasswd2(passwd, passwd2)
                if (successStatus) {
                    modal.style.display = "block";
                    alert("ok")
                    //OPEN MODAL
                }
                else {
                    //FALLO PSW2
                }
            }
            else {
                //FALLO PSW1
            }
           
        }
        else {
            alert("email2")
            //FALLO EMAIL 2
        }
    } else
    {
        //FALLO EMAIL 1
    }
     })
    ;


function validaEmail (email) {
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("El email no es correcto");
            alert(email);
            document.forms["form"]["fmail"].focus();
            return true; }
}

function validaEmail2 (email, email2) {
    atpos = email2.indexOf("@");
    dotpos = email2.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 ) && email === email2) {
        alert("El email no es correcto");
        alert(email);
        document.forms["form"]["fmail"].focus();
        return true; }
}

function validaPasswd (passwd) {
    if (passwd > 6) {
        return true;
    }
    else {
        return false;
    }
}

function validaPasswd2(passwd, passwd2){
    if (passwd2 = passwd) {
        return true;
    }
    else {
        return false;
    }
}
*/



