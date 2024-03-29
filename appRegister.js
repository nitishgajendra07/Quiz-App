function getUserArray() {
    console.log("starting getUserArray");
    function isUser(obj) {
        return ((typeof obj === "object") && ("userName" in obj) && (typeof obj.userName === "string") && ("password" in obj) && (typeof obj.password === "string") && ("scores" in obj));
    }
    var data = localStorage.getItem("userData");
    console.log(data);
    if (typeof data === "string") {
        console.log("data is of type string");
        var dataParsed = void 0;
        try {
            console.log("inside try");
            dataParsed = JSON.parse(data);
            console.log(dataParsed);
        }
        catch (_a) {
            console.log("inside catch");
            localStorage.removeItem("userData");
            localStorage.setItem("userData", "[]");
            console.log("returning from getUserArray()");
            return [];
        }
        if (Array.isArray(dataParsed)) {
            console.log("dP is an array");
        }
        if (Array.isArray(dataParsed) && dataParsed.every(function (item) { return isUser(item); })) {
            console.log("dataparsed is of type UserArray");
            console.log("returning from getUserArray()");
            return dataParsed;
        }
    }
    localStorage.removeItem("userData");
    localStorage.setItem("userData", "[]");
    console.log("returning from getUserArray()");
    return [];
}
var registerButton = document.getElementById("registerButton");
if (registerButton) {
    registerButton.addEventListener("click", function (e) {
        e.preventDefault();
        var userNameElement = document.getElementById("registerUsername");
        var passwordElement = document.getElementById("registerPassword");
        var confirmPasswordElement = document.getElementById("confirmPassword");
        console.log(userNameElement);
        console.log(passwordElement);
        console.log(confirmPasswordElement);
        var inputUsername;
        var inputPassword;
        var confirmPassword;
        inputUsername = userNameElement.value;
        inputPassword = passwordElement.value;
        confirmPassword = confirmPasswordElement.value;
        console.log(userNameElement.value);
        console.log(passwordElement.value);
        console.log(confirmPasswordElement.value);
        console.log(inputUsername);
        console.log(inputPassword);
        console.log(confirmPassword);
        var dataParsed = getUserArray();
        console.log(dataParsed);
        console.log(inputUsername);
        console.log(inputPassword);
        if (inputPassword !== confirmPassword) {
            alert("Please Re-enter the same password");
        }
        var newUserObj = {
            userName: inputUsername,
            password: inputPassword,
            scores: []
        };
        dataParsed.push(newUserObj);
        console.log(dataParsed);
        localStorage.setItem("userData", JSON.stringify(dataParsed));
    });
}
