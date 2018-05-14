const button = document.querySelector('button.greeting')
function changeText(){
    const para = document.querySelector('p.greeting')
    para.textContent = "changed text" //sets the text to a custom message
    //para.textContent w/o an assignment will return the current content
}

button.addEventListener('click',changeText)
