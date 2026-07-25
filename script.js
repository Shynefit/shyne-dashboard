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

    let savings = localStorage.getItem("savings");

    if (!savings) {
        savings = 0;
    }

    let add = document.getElementById("savingsInput").value;

    savings = parseInt(savings) + parseInt(add);

    localStorage.setItem("savings", savings);

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
