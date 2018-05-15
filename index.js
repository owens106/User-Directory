const clickTrack = document.querySelector('button.greeting')
const H1Change = document.querySelector('button.headChange')
const H2Change = document.querySelector('button.head2Change')
const form = document.querySelector('form')
 
let count =1
function counter(ev){
    ev.target.textContent="you just clicked me " + count +" times"
    count++
}
function H1Change_(){
    const H1 = document.querySelector('h1.h1_0')
    H1.textContent="You just Changed the first header"
}
function H2Change_(){
    const H2= document.querySelector('h1.h1_1')
    H2.textContent="You just Changed The second Header"
}
function addToDirectory(){
    
    let input = document.getElementById("input").value
    const directory = document.getElementById('users')
    directory.textContent=directory.textContent+= " "+input+ " "
    return false
}
clickTrack.addEventListener('click',counter)
H1Change.addEventListener('click',H1Change_)
H2Change.addEventListener('click',H2Change_)
