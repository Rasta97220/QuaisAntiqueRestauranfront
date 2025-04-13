// Validation pour le champ "Nom"

const inputNom = document.getElementById("nomInput"); // ID corrigé
const inputPreNom = document.getElementById("PrenomInput"); // ID corrigé
const inputMail = document.getElementById("EmailInput"); // ID corrigé
const inputPassword = document.getElementById("PasswordInput"); // ID corrigé
const inputValidationPassword = document.getElementById("ValidatePasswordInput"); // ID corrigé
const btnValidation = document.getElementById("btn-validation-inscription"); // ID corrigé

inputNom.addEventListener("keyup", validateForm); // Ajout de l'écouteur d'événement
inputPreNom.addEventListener("keyup", validateForm); // Ajout de l'écouteur d'événement
inputMail.addEventListener("keyup", validateForm); // Ajout de l'écouteur d'événement
inputPassword.addEventListener("keyup", validateForm); // Ajout de l'écouteur d'événement
inputValidationPassword.addEventListener("keyup", validateForm); // Ajout de l'écouteur d'événement

function validateForm() {
    const nomOk = validateRequired(inputNom); // Validation du champ "Nom"
    const prenomOk = validateRequired(inputPreNom); // Validation du champ "Prénom"
    const mailOk = validateMail(inputMail); // Validation du champ "Email"
    const passwordOk = validatePassword(inputPassword); // Validation du champ "Mot de passe"
    const passwordConfirmOk = validateconfirmationPassword(inputPassword, inputValidationPassword); // Validation du champ "Confirmation du mot de passe"

    if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) { // Vérification de la validité des champs
        btnValidation.disabled = false; // Activation du bouton si tous les champs sont valides
    }
    else{
        btnValidation.disabled = true; // Désactivation du bouton si un champ est invalide
    }
}


function validateconfirmationPassword(inputPwd, inputcofirmPwd) {
    if(inputPwd.value === inputcofirmPwd.value) { // Vérification si les mots de passe correspondent
        inputcofirmPwd.classList.add("is-valid");
        inputcofirmPwd.classList.remove("is-invalid");
        return true; // Retourne true si les mots de passe correspondent
    }
    else {
        inputcofirmPwd.classList.remove("is-valid");
        inputcofirmPwd.classList.add("is-invalid");
        return false; // Retourne false si les mots de passe ne correspondent pas
    }
}


function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;  // Regex pour valider l'email
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true; // Retourne true si le mot de passe est valide
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false; // Retourne false si le mot de passe est invalide
    }
}    


function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider l'email
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true; // Retourne true si l'email est valide
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false; // Retourne false si l'email est invalide
    }
}    


function validateRequired(input) {
    if (input.value.trim() !== "") { // Utilisation de trim() pour éviter les espaces vides
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true; // Retourne true si le champ est valide
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false; // Retourne false si le champ est invalide
    }
}