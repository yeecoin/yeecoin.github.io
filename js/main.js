window.addEventListener("load", function() {
    var text = document.getElementById("yeecoin");
    var bool = true;
    console.log("running...");
    setInterval(() => {
        if (bool == true) {
            console.log("turning red");
            text.style.color = "red";
            bool = false;
        } else {
            console.log("turning yellow");
            text.style.color = "yellow";
            bool = true;
        }
    }, 100);
});