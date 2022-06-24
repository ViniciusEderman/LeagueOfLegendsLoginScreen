
const input = document.querySelectorAll('.input');
const button = document.querySelectorAll('.login_button');

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

const handleChange = () => {
    const [userName, password] = input;
    /* explicando a linha 17: seria a mesma coisa que fazer:
        const userName = input[0];
        const password = input[1];
    */
    if(userName.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', '');
    }
}

input.forEach((input) => input.addEventListener('focus', handleFocus));
input.forEach((input) => input.addEventListener('focusOut', handleFocusOut));
input.forEach((input) => input.addEventListener('input', handleChange));