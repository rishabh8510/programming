function Login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    } else {
        return "Invalid Username or Password";
    }
}

let result = Login("admin", "1234");
console.log(result);