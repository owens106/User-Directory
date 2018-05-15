const form = document.querySelector('#userForm')

 
const handleSubmit = function(ev) {
    /*RenderList(name||age||color)--> calls renderListItem 3 times



    */
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favColor = f.color.value
  
  renderList(userName,age,favColor)
 

  f.reset()  //dont reset each field use form.reset(). doesnt reset cursor
  f.userName.focus()//sets focus to certain field
}
const renderColor=function(color){
    const liColor_Div=document.createElement('div')
    liColor_Div.style.height= '3rem'
    liColor_Div.style.width= '6rem'
    liColor_Div.style.backgroundColor=color
    return liColor_Div
}
const renderList=function(name,age,color){
    //do something with type of entry
    const ul=document.createElement('ul')
    ul.appendChild(renderListItem(name,0))
    ul.appendChild(renderListItem(age,1))
    ul.appendChild(renderListItem(color,2))
    users.appendChild(ul)


}
const renderListItem=function(entry,flag){
    //do something with type of entry to format things
    const liItem = document.createElement('li')

    if(flag ==0){
        liItem.textContent=`Name: ${entry}`
    }
    else if(flag ==1){
        liItem.textContent=`Age: ${entry}`
    }
    else if(flag ==2){
        liItem.textContent=`Color: `
        liItem.appendChild(renderColor(entry))
    }
    return liItem
}

form.addEventListener('submit', handleSubmit)