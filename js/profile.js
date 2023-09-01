
document.getElementById("profil_form_data").addEventListener("submit", function(event) {
    event.preventDefault();

    var civility = document.querySelector('input[name="profile_civility"]:checked').value;
    var firstName = document.getElementById("profile_name").value;
    var lastName = document.getElementById("profile_lastname").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    console.log("Civilité:", civility);
    console.log("Prénom:", firstName);
    console.log("Nom:", lastName);
    console.log("Date de naissance:", day + "/" + month + "/" + year);
});