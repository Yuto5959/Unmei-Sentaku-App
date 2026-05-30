const tossBtn = document.getElementById("tossBtn");
const retryBtn = document.getElementById("retryBtn");
const veil = document.getElementById("veil");

const mainImage = document.getElementById("mainImage");

const resultContainer =
    document.getElementById("resultContainer");

const selectedChoice =
    document.getElementById("selectedChoice");

const coinSide =
    document.getElementById("coinSide");

let result = "";
let selected = "";

tossBtn.addEventListener("click", () => {

    const heads =
        document.getElementById("heads").value.trim();

    const tails =
        document.getElementById("tails").value.trim();

    if(!heads || !tails){
        alert("両方入力してください");
        return;
    }

    document.getElementById("heads").disabled = true;
    document.getElementById("tails").disabled = true;

    tossBtn.disabled = true;

    result =
        Math.random() < 0.5
        ? "表"
        : "裏";

    selected =
        result === "表"
        ? heads
        : tails;

    mainImage.src =
        "image/sports_coin_toss.png";

    mainImage.classList.add("coin-animation");

    setTimeout(() => {

        mainImage.classList.remove("coin-animation");

        mainImage.src =
            "image/seikou_banzai_woman.png";

        resultContainer.classList.remove("hidden");

    },1000);

});

veil.addEventListener("click", () => {

    veil.style.display = "none";

    document
        .getElementById("resultArea")
        .classList
        .remove("hidden");

    selectedChoice.textContent =
        selected;

    coinSide.textContent =
        `（${result}が出ました）`;

    retryBtn.style.display =
        "inline-block";

});

retryBtn.addEventListener("click", () => {

    location.reload();

});