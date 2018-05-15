const form = document.querySelector('#userForm')
 
const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  //users.textContent += ' ' + userName
  users.innerHTML += '<p>' + userName + ", "+age+'</p>' //adds each into own paragraph

  f.userName.value = ''
  f.age.value=''
}

form.addEventListener('submit', handleSubmit)