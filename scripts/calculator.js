
function mudarcor() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    
    const btn = document.querySelector('.btn-theme');
    if (body.classList.contains('light-mode')) {
        btn.innerHTML = 'Dark';
    } else {
        btn.innerHTML = 'Light';
    }
}
