let skip = document.getElementsByClassName("skip");
skip.tabIndex = 0;
skip.addEventListener("focus", function(){
    skip.style.display = "inline";
});

document.getElementById("submit").addEventListener("click", function(){
    document.getElementById("name").clear();
    document.getElementById("email").clear();
    document.getElementById("message").clear();
    document.getElementById("thanks").style.visibility = "visible";
});