const loginButton = document.getElementById('submit_button');

async function showLoginInfo() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(username.value);
    console.log(password.value);

    

    let loginCredentials = {
        'username':username.value,
        'password':password.value
    }


    const response = await fetch('/process_login', {
        method:"POST",
        body: JSON.stringify(loginCredentials),
        headers: myHeaders

    })

    const status = await response.json()

    if (status.status == 'success') {
        username.value = '';
        password.value = '';
    }
    else {
        alert("Incorrect Credentials");
    }

    console.log(status);
}

loginButton.addEventListener('click', showLoginInfo, false);