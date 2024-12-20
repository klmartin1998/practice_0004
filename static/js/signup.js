const loginButton = document.getElementById('submit_button');

async function showLoginInfo() {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    

    let signupCredentials = {
        'firstname':firstname.value,
        'lastname':lastname.value,
        'email':email.value,
        'username':username.value,
        'password':password.value
    }

    console.log(signupCredentials)

    const response = await fetch('/process_signup', {
        method:"POST",
        body: JSON.stringify(signupCredentials),
        headers: myHeaders

    })

    /*
    const status = await response.json()

    if (status.status == 'success') {
        firstname.value = '';
        lastname.value = '';
        email.value = '';
        username.value = '';
        password.value = '';
    }
    else {
        alert("Incorrect Credentials");
    }

    console.log(status);
    */
}

loginButton.addEventListener('click', showLoginInfo, false);