
const input = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('spanActive');
}

const handleFocusOut = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.remove('spanActive');
}

input.forEach((input) => input.addEventListener('focus', handleFocus));
input.forEach((input) => input.addEventListener('focusOut', handleFocusOut));