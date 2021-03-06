const message = document.querySelector('#message')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const namet = document.querySelector('#name')
const formElement = document.getElementById("nameForm")

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

const bed1 = document.querySelector('#bed')
const bath1 = document.querySelector('#bath')
const ft1 = document.querySelector('#ft')
const ace1 = document.querySelector('#ace')
const tell1 = document.querySelector('#tell')
const formElement2 = document.getElementById('houses')

const nate = (event) => {
    event.preventDefault()
    const bed2 = bed1.value
    const bath2 = bath1.value
    const ft2 = ft1.value
    const ace2 = ace1.value
    const tell2 = tell1.value
    const theBody2 = {
        beds: bed2,
         baths: bath2,
         sq_ft: ft2,
         aceage: ace2,
         bio: tell2,
         }
    if (window.confirm("You want it to send?")){
    axios.post("https://capstonef24.herokuapp.com/homes", theBody2)
    .then((response) => {
        if(response.data.success) { 
            alert('We will be in touch soon!')
            console.log(response.data)
        }else {alert('failed.')
            console.log(response.data)
        } 
    })}
    else {alert('It was not sent.')}
    bed1.value = ''
    bath1.value = ''
    ft1.value = ''
    ace1.value = ''
    tell1.value = ''
};

formElement2.addEventListener('submit', nate)
formElement.addEventListener('submit', contact)