//regexes
const noSpecialSignsRegex = new RegExp(/[!@$%^&*(),?":{}|<>]/)
const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

//have fat i formen CHECK
let form = document.getElementById('signupform')
let hasErrors = false;

function submitForm(event){
  event.preventDefault()
  clearErrors()
  
  let firstName = event.target.firstname
  let lastName = event.target.lastname
  let address = event.target.address

  console.log(firstName.value);
  
  if (firstName.value.length < 2){
    setErrorMessage(firstName, 'Dit fornavn skal være mindst to bogstaver')
  } else if (noSpecialSignsRegex.test(firstName.value)){
    setErrorMessage(firstName, 'Dit navn må ikke indeholde specialtegn')
  }

    if (lastName.value.length < 2){
      setErrorMessage(lastName, 'Dit efternavn skal være mindst to bogstaver')
  }
    if (address.value.length < 2){
    setErrorMessage(address, 'Din adresse skal være mindst to bogstaver')
  }
  // indsæt email + regex
  // indsæt resten af inputs
  if (hasErrors === false){
    alert('Tillykke du har indsent en form')
  }
}


// Helper function to create error message
// Takes "target" as argument and the message you want to show
function setErrorMessage(target, message){
    hasErrors = true
    // create et nyt element CHECK :)
    let errorMessage = document.createElement('b')
    errorMessage.classList.add('error')
    //indsætte element i formen (appendChild)
    errorMessage.innerText = message
    target.after(errorMessage)
}

setErrorMessage('Dit navn er for kort')
function clearErrors(){
  hasErrors = false
  let errors = document.querySelectorAll('.error')
  console.log(errors);
  errors.forEach((element) =>{element.remove()})
}