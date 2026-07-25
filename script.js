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

function saveGoal() {

    let goal = document.getElementById("goalInput").value;

    document.getElementById("goalDisplay").innerText = goal + " kg";

    localStorage.setItem("goal", goal);

    document.getElementById("goalInput").value = "";

    let toast = document.getElementById("toast");

    toast.innerText = "🎯 Goal saved!";

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}
function addWorkout() {

    let streak = localStorage.getItem("streak");

    if (!streak) {
        streak = 0;
    }

    streak = parseInt(streak) + 1;

    localStorage.setItem("streak", streak);

    document.getElementById("streakDisplay").innerText =
        streak + " Days";

    let toast = document.getElementById("toast");
    toast.innerText = "🔥 Workout saved!";
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

    let savedGoal = localStorage.getItem("goal");
    if (savedGoal) {
        document.getElementById("goalDisplay").innerText =
            savedGoal + " kg";
    }

    let savedStreak = localStorage.getItem("streak");
    if (savedStreak) {
        document.getElementById("streakDisplay").innerText =
            savedStreak + " Days";
    }

};
