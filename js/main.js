window.addEventListener("load", function() {
    var text = document.getElementById("yeecoin");
    var bool = true;
    setInterval(() => {
        if (bool == true) {
            text.style.color = "red";
            bool = false;
        } else {
            text.style.color = "yellow";
            bool = true;
        }
    }, 100);
});

window.addEventListener("load", function() {
    var text = document.getElementById("rich");
    var bool = true;
    setInterval(() => {
        if (bool == true) {
            text.style.color = "red";
            bool = false;
        } else {
            text.style.color = "yellow";
            bool = true;
        }
    }, 100);
});

function buyYeeCoin() {
    var total = document.getElementById("total");
    var value = document.getElementById("value");
    total.textContent = Number(total.textContent) + 1;
    value.textContent = 1 + Number(value.textContent) * (Math.random()*10);
};