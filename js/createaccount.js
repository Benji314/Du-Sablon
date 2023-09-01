
document.getElementById("connection_form_data").addEventListener("submit", function(event) {
    event.preventDefault();

    var civility = document.querySelector('input[name="profile_civility"]:checked').value;
    var firstName = document.getElementById("profile_name").value;
    var lastName = document.getElementById("profile_lastname").value;
    var email = document.getElementById("profile_email").value;
    var confirm_email = document.getElementById("profile_confirm_email").value;
    var phone_number = document.getElementById("profile_phone").value;
    var password = document.getElementById("profile_password").value;
    var confirm_password = document.getElementById("profile_confirm_password").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    console.log("Civilité:", civility);
    console.log("Prénom:", firstName);
    console.log("Nom:", lastName);
    console.log("Adresse email:", email);
    console.log("Confirmation de l'adresse email:", confirm_email);
    console.log("Numéro de téléphone:", phone_number);
    console.log("Mot de passe:", password);
    console.log("Confirmation du mot de passe:", confirm_password);
    console.log("Date de naissance:", day + "/" + month + "/" + year);
});