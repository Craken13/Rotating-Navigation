<<<<<<< HEAD
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

=======
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

>>>>>>> f4c6d887d8c453743149dd9a78f8bd662df01dcb
close.addEventListener('click', () => container.classList.remove('show-nav'))