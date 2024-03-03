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
// localStorage.setItem("userData",`[{       "userName": "Nitish",
// "password":"12345",
// "scores":[]
// }]`
//     )
console.log(getUserArray());
document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener("click", function (e) {
            console.log("clicked login");
            e.preventDefault();
            var loginSuccess = false;
            var userNameElement = document.getElementById("loginUsername");
            var passwordElement = document.getElementById("loginPassword");
            var inputUsername;
            var inputPassword;
            // if("value" in userNameElement){
            inputUsername = userNameElement.value;
            // if("value" in passwordElement){
            inputPassword = passwordElement.value;
            console.log(userNameElement.value, passwordElement.value);
            console.log(inputUsername, inputPassword);
            var dataParsed = getUserArray();
            console.log("in onclick", dataParsed, dataParsed.length);
            for (var i = 0; i < dataParsed.length; i++) {
                if (inputUsername == dataParsed[i].userName && inputPassword == dataParsed[i].password) {
                    loginSuccess = true;
                }
            }
            if (loginSuccess === true) {
                window.location.href = "entry.html";
            }
            else {
                alert("Invalid username or password");
            }
            // }
            // }
        });
    }
});
