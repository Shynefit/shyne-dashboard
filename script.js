function sayHello() {
    alert("Hello Bes! 💙 Welcome to Shyne OS!");
}

function saveWeight() {
    alert("SAVE CLICKED!");

    let weight = document.getElementById("weightInput").value;

    alert(weight);

    document.getElementById("weightDisplay").innerText = weight + " kg";

    localStorage.setItem("weight", weight);
}

window.onload = function () {

    let savedWeight = localStorage.getItem("weight");

    if (savedWeight) {
        document.getElementById("weightDisplay").innerText =
            savedWeight + " kg";
    }

}
