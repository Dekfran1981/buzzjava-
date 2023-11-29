document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', function () {
        buttons[0].style.background = 'red';
    });

    buttons[1].addEventListener('click', function () {
        buttons[1].style.background = 'blue';
    });

    buttons[2].addEventListener('click', function () {
        buttons[2].style.background = 'green';
    });
});