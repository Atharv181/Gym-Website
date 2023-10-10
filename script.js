function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || age === "" || gender === "" || email === "") {
        alert("All fields are required!");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email address!");
        return false;
    }

    return true;
}
