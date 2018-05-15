const form = document.querySelector('#userForm')

 
const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  //users.innerHTML += `<p>${userName}, ${age} </p>` //adds each into own paragraph
  const p=document.createElement('p')
  p.textContent = `${userName}, ${age}`
  users.appendChild(p) //adds p to the end of users
  //dont reset each field use form.reset(). doesnt reset cursor
  f.reset()
  f.userName.focus()//sets focus to certain field
}

form.addEventListener('submit', handleSubmit)