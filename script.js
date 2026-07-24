function sayHello() {
    alert("Hello Bes! 💙 Welcome to Shyne OS!");
}

function saveWeight() {

    let weight = document.getElementById("weightInput").value;

    document.getElementById("weightDisplay").innerText = weight + " kg";

    localStorage.setItem("weight", weight);

    document.getElementById("weightInput").value = "";

    alert("Weight saved! ✅");

}

window.onload = function () {

    let savedWeight = localStorage.getItem("weight");

    if (savedWeight) {
        document.getElementById("weightDisplay").innerText =
            savedWeight + " kg";
    }

}
