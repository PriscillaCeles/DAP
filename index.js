const $buttonMenuOpen = document.querySelector('.button-mobile-open')
const $botaoMenuClose = document.querySelector('.button-mobile-close')
const $Menu = document.querySelector('.nav-mobile')

$buttonMenuOpen.addEventListener('click', function () { 
    $Menu.classList.add('nav-mobile--ativo')
    })

$botaoMenuClose.addEventListener('click', function () {
        $Menu.classList.remove('nav-mobile--ativo')
    })