const view = document.querySelector('#view')
const list = document.querySelector('#list')


const see = () => {
    window.location.href=("https://capstonef24.herokuapp.com/buy")
}

const homes = () => {
    window.location.href=("https://capstonef24.herokuapp.com/selling")
}




view.addEventListener('click', see)