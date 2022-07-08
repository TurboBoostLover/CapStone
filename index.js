const view = document.querySelector('#view')
const list = document.querySelector('#list')
const message = document.querySelector('#message')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const namet = document.querySelector('#name')
const formElement = document.getElementById("nameForm")

const see = () => {
    window.location.href=("https://capstonef24.herokuapp.com/buy")
};

const homes = () => {
    window.location.href=("https://capstonef24.herokuapp.com/selling")
};

const contact = (event) => {
     event.preventDefault()
     const namev = namet.value
     const numberv = number.value
     const emailv = email.value
     const messagev = message.value
    const theBody = {
        name: namev,
        number: numberv,
        email: emailv,
        message: messagev
    }
    axios.post("https://capstonef24.herokuapp.com/message", theBody)
    .then((response) => {
        if(response.data.success) {
            alert(`${namev} it has been sent!`)
            console.log(response.data)
        } else {
            alert('fail')
        }
    })
    namet.value = ''
    number.value = ''
    email.value = ''
    message.value = ''
};


const zillow = document.querySelector('#zillow')
const realtor = document.querySelector('#realtor')

const address = () => {
    window.location.href=("https://www.zillow.com/")
}

const address2 = () => {
    window.location.href=("https://www.realtor.com/")
}

zillow.addEventListener('click', address)
realtor.addEventListener('click', address2)



formElement.addEventListener('submit', contact)
list.addEventListener('click', homes)
view.addEventListener('click', see)