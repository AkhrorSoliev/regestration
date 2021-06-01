const formEl = document.getElementById('form')
const usernameEl = document.getElementById('username')
const emailEl = document.getElementById('email')
const parol1El = document.getElementById('parol1')
const parol2El = document.getElementById('parol2')

function showError(input, massage) {
  const formContorl = input.parentElement
  formContorl.className = 'form-control error'
  const span = formContorl.querySelector('span')
  span.textContent = massage
}

function showSuccess(input) {
  const formContorl = input.parentElement
  formContorl.className = 'form-control success'
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${correcName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

function correcName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase()
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  checkRequired([usernameEl, emailEl, parol1El, parol2El])
})

/*if (usernameEl.value === '') {
    showError(usernameEl, 'Ism kiritilmadi')
  } else {
    showSuccess(usernameEl)
  }

  if (emailEl.value === '') {
    showError(emailEl, 'Email kiritilmadi')
  } else if (!validateEmail(emailEl.value)) {
    showError(emailEl, `Email tog'ri emas`)
  } else {
    showSuccess(emailEl)
  }

  if (parol1El.value === '') {
    showError(parol1El, 'Parol kiritilmadi')
  } else {
    showSuccess(parol1El)
  }

  if (parol2El.value === '') {
    showError(parol2El, 'Parol kiritilmadi')
  } else {
    showSuccess(parol2El)
  }

  if (parol2El.value === '') {
    showError(usernameEl, 'Parol kiritilmadi')
  } else {
    showSuccess(usernameEl)
  } */
