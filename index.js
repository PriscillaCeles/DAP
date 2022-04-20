const $buttonMenuOpen = document.querySelector('.button-mobile-open')
const $buttonMenuClose = document.querySelector('.button-mobile-close')
const $main = document.querySelector('main')

const $Menu = document.querySelector('.nav-mobile')

$buttonMenuOpen.addEventListener('click', function () { 
    $Menu.classList.add('nav-mobile--ativo')
    })

$buttonMenuClose.addEventListener('click', function () {
        $Menu.classList.remove('nav-mobile--ativo')
    })

$main.addEventListener('click', function () {
        $Menu.classList.remove('nav-mobile--ativo')
    })