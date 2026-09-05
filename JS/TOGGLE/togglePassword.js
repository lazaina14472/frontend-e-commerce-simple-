

const password = document.getElementById('password');

export const btnTogglePasswordAdmin =
    document.getElementById('btnTogglePasswordAdmin');


btnTogglePasswordAdmin.addEventListener('click', () => {

    if (password.type === 'password') {

        password.type = 'text';

        btnTogglePasswordAdmin.textContent = 'Hide';

    }

    else {

        password.type = 'password';

        btnTogglePasswordAdmin.textContent = 'Show';

    }

});