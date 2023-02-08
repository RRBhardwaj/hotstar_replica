function getInputValue(id){
    let value = document.getElementById(id).value;

    return value;
}


function User(name, email, password, username, mobile, description){
    this.name = name;
    this.email = email;
    this.password = password; 
    this.username = username;
    this.mobile = mobile;
    this.description = description;
}


async function Register(id){
    const name = getInputValue("name");
    const email = getInputValue("email");
    const username = getInputValue("username");
    const password = getInputValue("password");
    const mobile = getInputValue("mobile");
    const description = getInputValue("description");

    let user_data = new User(name,email,username,password,mobile,description);
    // console.log("user_data:",user_data);
    let actual_data = JSON.stringify(user_data);

    try{
        let response = await fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method : 'POST',
        body: actual_data,
        headers: {
            "Content-Type": "application/json",
            },
        });

        let data=await response.json();
        console.log("data:",data);
    }catch(error){
        console.log("error:",error);
    }

}