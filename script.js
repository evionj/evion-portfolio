// Dark mode toggle
const btn = document.getElementById('themeToggle');
const key = 'prefers-dark';

function setMode(dark) {
    document.documentElement.classList.toggle('dark', dark);
    btn.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem(key, dark ? '1' : '0');
}

setMode(localStorage.getItem(key) === '1');
btn.addEventListener('click', () => setMode(!document.documentElement.classList.contains('dark')));
