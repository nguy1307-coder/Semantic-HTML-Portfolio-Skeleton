function displaylight(){
    document.body.classList.toggle("dark-mode");
    const btn = document.querySelector('button');
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "🌘";
    } else {
        btn.textContent = "☀️";
    }    
}