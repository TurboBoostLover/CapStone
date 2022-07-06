const view = document.querySelector('#view')
const list = document.querySelector('#list')
const message = document.querySelector('#message')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const name = document.querySelector('#name')
const submit = document.querySelector('#submit')

const see = () => {
    window.location.href=("https://capstonef24.herokuapp.com/buy")
}

const homes = () => {
    window.location.href=("https://capstonef24.herokuapp.com/selling")
}

const contact = (event) => {
    event.preventDefault()
    const name = name.value
    const number = number.value
    const email = email.value
    const message = message.value
    /*const theBody = {
        name: name,
        number: number,
        email: email,
        message: message
    }*/
    alert(`${name} it has sent!`)
}


submit.addEventListener('submit', contact)
list.addEventListener('click', homes)
view.addEventListener('click', see)