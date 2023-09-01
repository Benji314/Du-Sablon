
document.getElementById("connection_form_data").addEventListener("submit", function(event) {
    event.preventDefault();

    var email =  document.getElementById("profile_email").value;
    var password = document.getElementById("profile_password").value;

    console.log("Adresse email:", email);
    console.log("Mot de passe:", password);
});