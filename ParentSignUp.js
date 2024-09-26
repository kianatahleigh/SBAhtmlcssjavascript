function goToParentLoginPage() {
    location.href = "ParentLogin.html";
  }

function createChildFields() {
    var childrenCount = document.getElementById("childrenCount").value;
    var container = document.getElementById("childrenContainer");

    
    container.innerHTML = "";

    
    for (var i = 1; i <= childrenCount; i++) {
        var childSection = document.createElement('div');
        childSection.className = "child-section";

        childSection.innerHTML = `
            <h3>Child ${i}</h3>
            <label for="child_fname_${i}">First Name:</label>
            <input type="text" id="child_fname_${i}" name="child_fname_${i}" required /><br>

            <label for="child_lname_${i}">Last Name:</label>
            <input type="text" id="child_lname_${i}" name="child_lname_${i}" required /><br>

            <label for="child_birthday_${i}">Date of Birth:</label>
            <input type="date" id="child_birthday_${i}" name="child_birthday_${i}" required /><br>

            <label for="child_age_${i}">Age:</label>
            <input type="number" id="child_age_${i}" name="child_age_${i}" min="0" required /><br>

            <label for="child_gender_${i}">Gender:</label>
            <select id="child_gender_${i}" name="child_gender_${i}" required>
                <option value="">Select Gender</option>
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
            </select><br>
        `;

        container.appendChild(childSection);
    }
}




document.getElementById('signupForm').addEventListener('submit', function(event) {
    var isValid = verifyFields() && verifyFields1() && verifyFields2() && verifyFields4() && verifyFields5() && verifyFields6() && verifyPhone();

    if (!isValid) {
        event.preventDefault();
    } else {
        dateDiff(); 
    }
});

function verifyFields() {
    var fname = document.getElementById("fname").value;
    if (fname === "") {
        document.getElementById("error").innerHTML = "Invalid First Name";
        return false;
    } else {
        document.getElementById("error").innerHTML = "";
        return true;
    }
}

function verifyFields1() {
    var lname = document.getElementById("lname").value;
    if (lname === "") {
        document.getElementById("error1").innerHTML = "Invalid Last Name";
        return false;
    } else {
        document.getElementById("error1").innerHTML = "";
        return true;
    }
}

function verifyFields2() {
    var email = document.getElementById("email").value;
    var pattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

    if (!pattern.test(email)) {
        document.getElementById("error2").innerHTML = "Invalid Email";
        return false;
    } else {
        document.getElementById("error2").innerHTML = "";
        return true;
    }
}

function verifyPhone() {
    var phone = document.getElementById("phone").value;
    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        document.getElementById("errorPhone").innerHTML = "Invalid Phone Number";
        return false;
    } else {
        document.getElementById("errorPhone").innerHTML = "";
        return true;
    }
}



function verifyFields4() {
    var pid = document.getElementById("pid").value;
    if (pid.length < 8 || !/[A-Z]/.test(pid) || !/[a-z]/.test(pid) || !/[0-9]/.test(pid)) {
        document.getElementById("error3").innerHTML = "Invalid Password";
        return false;
    } else {
        document.getElementById("error3").innerHTML = "";
        return true;
    }
}

function verifyFields5() {
    var input = document.getElementById('prid');
    if (input.value != document.getElementById('pid').value) {
        document.getElementById("error4").innerHTML = "Passwords do not match";
        return false;
    } else {
        document.getElementById("error4").innerHTML = "";
        return true;
    }
}

function verifyFields6() {
    var birthday = document.getElementById("birthday").value;
    if (birthday === "") {
        document.getElementById("error5").innerHTML = "Invalid Birthday";
        return false;
    } else {
        document.getElementById("error5").innerHTML = "";
        return true;
    }
}

function dateDiff() {
    var birthday = new Date(document.getElementById("birthday").value);
    var years = Math.floor((new Date() - birthday) / 31536000000);
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    document.getElementById("days").innerHTML =
        fname + " " + lname + ", you are " + years + " years old.";
}