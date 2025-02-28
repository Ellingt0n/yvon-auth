jQuery(function($){
 $(".input-tel").mask("+7 (999) 999-99-99"); 
 $(".input-date").mask("99.99.9999");
});

document.querySelector(".toggle-password").addEventListener("click", function () {
    let passwordInput = document.querySelector(".password-input");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    this.classList.toggle("visible");
});
