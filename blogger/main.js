window.onload = setupFunction;

var postCount = 0;

function setupFunction() {
    document.getElementById("top").innerHTML = "Welcome to the Forum";

    document.getElementById("post").onclick = postFunction;
    document.getElementById("clear").onclick = clearFunction;
}

function postFunction() {
    var message = document.getElementById("message").value;

    if (postCount == 0) { 
        document.getElementById("topic").innerHTML = message;
    } 
    else if (postCount == 1) {
        document.getElementById("reply1").innerHTML = message;
    } 
    else if (postCount == 2) {
        document.getElementById("reply2").innerHTML = message;
    }

    document.getElementById("message").value = "";
    postCount++;
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    document.getElementById("message").value = "";

    postCount = 0;
}