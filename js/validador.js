window.onload = function() {
const form = document.getElementById("formulario");
const email = document.getElementById("correo");
const email2 = document.getElementById("correo2");
const passwd = document.getElementById("pass");
const passwd2 = document.getElementById("pass2");
let errorMail2 = document.getElementById("errorMail2");
let errorPass = document.getElementById("errorPass");
let errorPass2 = document.getElementById("errorPass2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var emailID = email.value;
            atpos = emailID.indexOf("@");
            dotpos = emailID.lastIndexOf(".");
            if (atpos < 1 || ( dotpos - atpos < 2 )) {
                alert("El email no es correcto");
                alert(emailID);
                document.forms["form"]["fmail"].focus();
                return false; }
            else {
                   let emailid2 = email2.value;
                   if (emailid2 != emailID)
                   {
                    email2.style.borderColor= 'red';
                    email.style.borderColor= 'red';
                    errorMail2.style.display='block';
                    errorMail.innerHTML='Los correos no coinciden';
                    errorMail2.innerHTML='Los correos no coinciden';
                    }
                    else {
                        pass = passwd.value;
                        pass2 = passwd2.value;
                        if (pass2 == pass) {
                            
                            modal.style.display = "block";
                        }
                        else {

                            passwd2.style.borderColor= 'red';
                            passwd.style.borderColor= 'red';
                            errorPass.style.display='block';
                            errorPass.innerHTML='Las contraseñas no coinciden';
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
