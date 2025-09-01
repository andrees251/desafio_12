document.getElementById('toggleDark').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️ Modo Claro';
    } else {
        this.textContent = '🌙 Modo Oscuro';
    }
});