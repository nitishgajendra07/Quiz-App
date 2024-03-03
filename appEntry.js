console.log("In appEntry.ts");
var option1 = document.getElementById("option1"); // Corrected ID for option1
if (option1) {
    option1.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("clicked 1");
        window.location.href = "option1.html";
    });
}
var option2 = document.getElementById("option2"); // Corrected ID for option2
if (option2) {
    option2.addEventListener("click", function (e) {
        console.log("clicked 2");
        window.location.href = "option2.html";
    });
}
var option3 = document.getElementById("option3");
if (option3) {
    option3.addEventListener("click", function (e) {
        console.log("clicked 3");
        window.location.href = "option3.html";
    });
}
