function clearErrorMessages() {
        document.getElementById("error_lname").innerHTML 			= "";
        document.getElementById("error_fname").innerHML 			= "";
        document.getElementById("error_sexe").innerHTML 			= "";
        document.getElementById("error_dob").innerHTML   			= "";
        document.getElementById("error_cel").innerHTML				= "";
        document.getElementById("error_mail").innerHTML 			= "";}
      }

      function validateInputField(inputId, spanId) {
        var value = document.getElementById(inputId).value;
        if (value == null || value === "") {
          	document.getElementById(spanId).innerHTML = "Ce champ est obligatoire !";
          	return false;
        } else 
        	return true;
      }

      function check_sexe () {
      	var fieldefault = document.getElementById("none").selected;

      	if (fieldefault) {
      		document.getElementById("error_sexe").innerHTML = "Ce champ est obligatoire !";
      		return false;
      	}
      }
     function check_cellulaire() {
     	var tel = document.getElementById("t_cellulaire").value;

     	if (tel === "") 
     		document.getElementById("error_cel").innerHTML = "Vous devez rentrer au moins un numéro !";
     	else if (!(tel === "")) 
     		return phonenumber(tel,"error_cel");
     }

     function phonenumber(inputtxt,errorId){
  		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  		if ( (inputtxt.match(phoneno) )) {  
      		return true;  
        } else {  
        	document.getElementById(errorId).innerHTML = "Veuillez respecter le format (999-999-9999)";  
        	return false;  
        }  
	}

	function ValidateEmail(inputMail) {  
	  	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputMail)) return true;
	  	else document.getElementById("error_mail").innerHTML = "Veuillez entrer un courriel valide ! ( ex : nom.prenom@uqam.ca)";  
	}
	function check_email(){
		var mail = document.getElementById("email").value;

		if (!(mail === "")) return ValidateEmail(mail);
	}

  function checkRequiredFields() {
      clearErrorMessages();  
      var field_nom 		  = validateInputField("nom", "error_lname");
      var field_prenom 		= validateInputField("prenom", "error_fname");
      var field_dob 		  = validateInputField("dob", "error_dob");
      var field_numeros 	      = check_numeros();
      var field_email 		= check_email();
      var field_sexe 		    = check_sexe();
      var nb = field_nom && field_prenom && field_dob
            && field_numeros && field_email && field_sexe;
        return false;
      }

