const name = document.getElementById('name')
const form = document.getElementById('form')
const email = document.getElementById('mail')
const phone = document.getElementById('phone')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (mail.value === '' || mail.value == null) {
    messages.push('E-mail is required')
  }

  if (phone.value === '' || phone.value == null) {
    messages.push('Phone number is required')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})