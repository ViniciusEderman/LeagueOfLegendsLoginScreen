
const input = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('spanActive');
}

const handleFocusOut = ({ target }) => {
    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('spanActive');
    }
}

input.forEach((input) => input.addEventListener('focus', handleFocus));
input.forEach((input) => input.addEventListener('focusOut', handleFocusOut));

// este código js não está funcionando
// entender o que está acontecendo
// resolver e testar para continuar com a estilização 