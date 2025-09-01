
    /* ☀️
      
        🌙 
        */

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleDark");
  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      btn.textContent = "Modo Claro";
    } else {
      btn.textContent = "Modo Oscuro";
    }
  });
});