document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const input = document.getElementById('email');

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    input.addEventListener('change', (e) => {
        if (!pattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}
