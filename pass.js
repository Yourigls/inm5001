 
function checkEmail(theForm) {
    if (theForm.mdp.value != theForm.mdpbis.value) {
        alert('Les mots de passes ne correspondent pas !');
        return false;
    } else {
        return true;
    }
}