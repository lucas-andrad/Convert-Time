let number = document.getElementById('number')

function converter(){
    console.log(number.value)
    let result = number.value/24
    let p = document.createElement("p")
    p.innerHTML = result
    document.body.appendChild(p)
}

