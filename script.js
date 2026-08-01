function sayHello() {
    alert("Hello Bes! 💙 Welcome to Shyne OS!");
}

function saveWeight() {
    let weight = document.getElementById("weightInput").value;

    document.getElementById("weightDisplay").innerText = weight + " kg";
    localStorage.setItem("weight", weight);

    document.getElementById("weightInput").value = "";

    let toast = document.getElementById("toast");
    toast.innerText = "✅ Weight saved!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}

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

    let savedSavings = localStorage.getItem("savings");
    if (savedSavings) {
        document.getElementById("savingsDisplay").innerText =
            "₱" + savedSavings + " / ₱10,000";
    }

    let savedProtein = localStorage.getItem("protein");
    if (savedProtein) {
        document.getElementById("proteinDisplay").innerText =
            savedProtein + " / 140 g";
    }

    let savedWater = localStorage.getItem("water");
    if (savedWater) {
        document.getElementById("waterDisplay").innerText =
            savedWater + " / 3.5 L";
    }
let percent = (savedProtein / 140) * 100;

if (percent > 100) {
    percent = 100;
}

document.getElementById("proteinBar").style.width =
    percent + "%";
    
    let savedWater = localStorage.getItem("water");
if (savedWater) {
    document.getElementById("waterDisplay").innerText =
        savedWater + " / 3.5 L";
    
let waterPercent = (savedWater / 3.5) * 100;

if (waterPercent > 100) {
    waterPercent = 100;
}

document.getElementById("waterBar").style.width =
    waterPercent + "%";
}    
};
function resetStreak() {
    localStorage.setItem("streak", 0);

    document.getElementById("streakDisplay").innerText =
        "0 Days";

    let toast = document.getElementById("toast");
    toast.innerText = "🔄 Streak reset!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}
function addSavings() {

    let add = document.getElementById("savingsInput").value;
    let savings = localStorage.getItem("savings") || 0;

    savings = Number(savings) + Number(add);
    localStorage. setItem("savings", savings);
    document.getElementById("savingsDisplay").innerText =
        "₱" + savings + " / ₱10,000";

    document.getElementById("savingsInput").value = "";

    let toast = document.getElementById("toast");
    toast.innerText = "💰 Savings updated!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}
function resetSavings() {

    localStorage.setItem("savings", 0);

    document.getElementById("savingsDisplay").innerText =
        "₱0 / ₱10,000";

    document.getElementById("savingsInput").value = "";

    let toast = document.getElementById("toast");
    toast.innerText = "💸 Savings reset!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}
function addProtein() {

    let add = document.getElementById("proteinInput").value;
    let protein = localStorage.getItem("protein") || 0;

    protein = Number(protein) + Number(add);

    localStorage.setItem("protein", protein);

    document.getElementById("proteinDisplay").innerText =
        protein + " / 140 g";
let percent = (protein / 140) * 100;

if (percent > 100) {
    percent = 100;
}

document.getElementById("proteinBar").style.width =
    percent + "%";
    document.getElementById("proteinInput").value = "";

    let toast = document.getElementById("toast");
    toast.innerText = "🥩 Protein updated!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}

function resetProtein() {

    localStorage.setItem("protein", 0);

    document.getElementById("proteinDisplay").innerText =
        "0 / 140 g";

    document.getElementById("proteinInput").value = "";

    let toast = document.getElementById("toast");
    toast.innerText = "🔄 Protein reset!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}
function addWater() {

    let add = document.getElementById("waterInput").value;
    let water = localStorage.getItem("water") || 0;

    water = Number(water) + Number(add);

    localStorage.setItem("water", water);

    document.getElementById("waterDisplay").innerText =
        water + " / 3.5 L";

    document.getElementById("waterInput").value = "";

    let toast = document.getElementById("toast");
    toast.innerText = "💧 Water updated!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}

function resetWater() {

    localStorage.setItem("water", 0);

    document.getElementById("waterDisplay").innerText =
        "0 / 3.5 L";

    document.getElementById("waterInput").value = "";

    let toast = document.getElementById("toast");
    toast.innerText = "🔄 Water reset!";
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}
