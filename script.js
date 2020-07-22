let number = document.getElementById('number')
let input = document.getElementById('input')
let output = document.getElementById('output')

function converter(){ 
    input.innerHTML = number.value 
    output.innerHTML = number.value/24
}
