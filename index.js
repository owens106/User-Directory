const button = document.querySelector('button.greeting')
const count =0
function changeText(ev){
    ev.target.textContent="you just clicked me" + count +" times"
    const para = document.querySelector('p.greeting')
    para.textContent = "changed text" //sets the text to a custom message
    //para.textContent w/o an assignment will return the current content
}
button.addEventListener('click',changeText)
//button.addEventListener('mouseover',changeText)