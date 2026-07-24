function sayHello() {
    alert("Hello Bes! 💙 Welcome to Shyne OS!");
}

function saveWeight() {

    let weight = document.getElementById("weightInput").value;

    document.getElementById("weightDisplay").innerText = weight + " kg";

    localStorage.setItem("weight", weight);

    document.getElementById("weightInput").value = "";

    let toast = document.getElementById("toast");

toast.classList.add("show");

setTimeout(function () {
    toast.classList.remove("show");
}, 2000);

}

window.onload = function () {

    let savedWeight = localStorage.getItem("weight");

    if (savedWeight) {
        document.getElementById("weightDisplay").innerText =
            savedWeight + " kg";
    }

}
