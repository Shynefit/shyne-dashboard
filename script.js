function sayHello() {
    alert("Hello Bes! 💙 Welcome to Shyne OS!");
}

// =======================
// WEIGHT
// =======================
function saveWeight() {
    let weight = document.getElementById("weightInput").value;

    if (weight === "") return;

    document.getElementById("weightDisplay").innerText = weight + " kg";
    localStorage.setItem("weight", weight);

    document.getElementById("weightInput").value = "";

    showToast("✅ Weight saved!");
}

// =======================
// GOAL
// =======================
function saveGoal() {
    let goal = document.getElementById("goalInput").value;

    if (goal === "") return;

    document.getElementById("goalDisplay").innerText = goal + " kg";
    localStorage.setItem("goal", goal);

    document.getElementById("goalInput").value = "";

    showToast("🎯 Goal saved!");
}

// =======================
// WORKOUT STREAK
// =======================
function addWorkout() {
    let streak = parseInt(localStorage.getItem("streak")) || 0;

    streak++;

    localStorage.setItem("streak", streak);

    document.getElementById("streakDisplay").innerText = streak + " Days";

    showToast("🔥 Workout saved!");
}

function resetStreak() {
    localStorage.setItem("streak", 0);

    document.getElementById("streakDisplay").innerText = "0 Days";

    showToast("🔄 Streak reset!");
}

// =======================
// SAVINGS
// =======================
function addSavings() {

    let amount = parseInt(document.getElementById("savingsInput").value);

    if (
