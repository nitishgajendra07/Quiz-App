import { User, UserArray } from "./types.js"

function getUserArray(): UserArray {

    console.log("starting getUserArray");

    function isUser(obj: any): obj is User {
        return ((typeof obj === "object") && ("userName" in obj) && (typeof obj.userName === "string") && ("password" in obj) && (typeof obj.password === "string") && ("scores" in obj))
    }

    let data: string | null = localStorage.getItem("userData");
    console.log(data);

    if (typeof data === "string") {
        console.log("data is of type string");
        let dataParsed: any
        try {
            console.log("inside try");
            dataParsed = JSON.parse(data);
            console.log(dataParsed);
        } catch {
            console.log("inside catch");
            localStorage.removeItem("userData");
            localStorage.setItem("userData", `[]`);
            console.log("returning from getUserArray()");
            return [] as UserArray;
        }
        if (Array.isArray(dataParsed)) {
            console.log("dP is an array");
        }

        if (Array.isArray(dataParsed) && dataParsed.every((item) => { return isUser(item) })) {
            console.log("dataparsed is of type UserArray");
            console.log("returning from getUserArray()");
            return dataParsed as UserArray;
        }
    }
    localStorage.removeItem("userData");
    localStorage.setItem("userData", `[]`);
    console.log("returning from getUserArray()");
    return [] as UserArray;
}

// localStorage.setItem("userData",`[{       "userName": "Nitish",
// "password":"12345",
// "scores":[]
// }]`
//     



console.log(getUserArray());

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener("click", (e: MouseEvent) => {
            console.log("clicked login");
            e.preventDefault()
            let loginSuccess: boolean = false;
            const userNameElement = document.getElementById("loginUsername") as HTMLInputElement;
            const passwordElement = document.getElementById("loginPassword") as HTMLInputElement;
            let inputUsername: string | null;
            let inputPassword: string | null;
            // if("value" in userNameElement){
            inputUsername = userNameElement.value;
            // if("value" in passwordElement){
            inputPassword = passwordElement.value;
            console.log(userNameElement.value, passwordElement.value);
            console.log(inputUsername, inputPassword);


            let dataParsed = getUserArray();

            console.log("in onclick", dataParsed, dataParsed.length);
            for (let i = 0; i < dataParsed.length; i++) {
                if (inputUsername == dataParsed[i].userName && inputPassword == dataParsed[i].password) {
                    loginSuccess = true

                }
            }
            if (loginSuccess === true) {
                window.location.href = "entry.html";
            }
            else {
                alert("Invalid username or password")
            }

        })
    }
})
