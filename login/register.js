// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================

window.onload = pageLoad;

function pageLoad() {
    document.getElementById("myRegister").onsubmit = validateForm;
}

function validateForm(event) {
    const errorMsg = document.getElementById("errormsg");
    const username = document.forms["myRegister"]["username"].value.trim();
    const passwords = document.forms["myRegister"]["password"];

    const password = passwords[0].value;
    const retypePassword = passwords[1].value;

    // ตรวจสอบว่า Password ทั้ง 2 ช่องตรงกันหรือไม่
    if (password !== retypePassword) {
        errorMsg.innerHTML = "Password ไม่ตรงกัน";
        alert("Password และ Retype Password ไม่ตรงกัน");
        return false;
    }

    errorMsg.innerHTML = "";

    // บันทึก username และ password
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Register success!");

    // ถ้าผ่านการตรวจสอบ จะไปตาม action="login.html"
    return true;
}