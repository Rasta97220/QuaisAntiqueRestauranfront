const mailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const btnSignin = document.getElementById("btnSignin");

    btnSignin.addEventListener("click", checkCredentials);

    function checkCredentials() {
        // Vérification des identifiants
        if (mailInput.value === "test@mail.com" && passwordInput.value === "123") {
            alert("Connexion réussie !");

            //il faudra récupérer le vrai token d'authentification
            const token = "testTokenhsrthjhyukiufupuryheru-jè-yiè_oçyç_dt"; // Simuler un token d'authentification
            
            //placer ce token en cookie

            window.location.replace("/"); // Redirection vers la page d'accueil
        } else {
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    }