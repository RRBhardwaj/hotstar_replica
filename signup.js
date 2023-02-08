
async function Login(){

    let login_data = {
        username: document.getElementById("login-username").value,
        password: document.getElementById("login-password").value,
    };
    login_data = JSON.stringify(login_data);

    let response = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
        method: "POST",
        body: login_data,
        headers: {
            "Content-Type": "application/json"
        },
    });
    let data = await response.json();
    // console.log("data:",data);

    let username = document.getElementById("login-username").value;
    getProfile(username,data.token);

}

async function getProfile(username,token){        
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;
    let response = await fetch(api, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });

    let data = await response.json();
    console.log("data:",data);
    let name = document.createElement("h4");
    name.innerText = `Name: ${data.name}`;

    let email = document.createElement("h5");
    email.innerText = `Email: ${data.email}`;

    let mobile = document.createElement("h5");
    mobile.innerText = `Phone Number: ${data.mobile}`;

    let msg = document.createElement("h6");
    msg.innerText = `You have successfully loged In`;

    let nxt = document.getElementById("token");
    nxt.append(name, email, mobile, msg);
}