const form = document.querySelector('#userForm')

 
const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favColor = f.color.value
  //users.innerHTML += `<p>${userName}, ${age} </p>` //adds each into own paragraph
  const p=document.createElement('p')
  p.textContent = `${userName}, ${age}`
  p.style.color=favColor
  users.appendChild(p) //adds p to the end of users

  f.reset()  //dont reset each field use form.reset(). doesnt reset cursor
  f.userName.focus()//sets focus to certain field
}

form.addEventListener('submit', handleSubmit)