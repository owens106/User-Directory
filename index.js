const form = document.querySelector('#userForm')

 
const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favColor = f.color.value
  //users.innerHTML += `<p>${userName}, ${age} </p>` //adds each into own paragraph
  const ul=document.createElement('ul')
  const liName = document.createElement('li')
  const liAge = document.createElement('li')
  const liColor = document.createElement('li')
  const liColor_Div=document.createElement('div')

  liColor_Div.style.height= '3rem'
  liColor_Div.style.width= '6rem'
  liColor_Div.style.backgroundColor=favColor
  

  liName.textContent=`Name: ${userName}`
  liAge.textContent=`Age: ${age}`
  liColor.textContent=`Favoirte Color: `

  liColor.appendChild(liColor_Div)


  ul.appendChild(liName)
  ul.appendChild(liAge)
  ul.appendChild(liColor)
  
  users.appendChild(ul)

  f.reset()  //dont reset each field use form.reset(). doesnt reset cursor
  f.userName.focus()//sets focus to certain field
}

form.addEventListener('submit', handleSubmit)