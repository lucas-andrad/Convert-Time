let number = document.getElementById('number')
let input = document.getElementById('input')
let output = document.getElementById('output')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let TimeInput = document.getElementById('TimeInput')
let TimeOutput = document.getElementById('TimeOutput')


function converter(){ 
    TimeInput.innerText = option1.value
    TimeOutput.innerText = option2.value
    // Seconds options
    if (option1.value=='Seconds'){        
        if (option2.value == option1.value){
            input.innerHTML = output.innerHTML = number.value
        }
        if (option2.value=='Minutes'){
            input.innerHTML = number.value
            output.innerHTML = number.value/60
        }
        if (option2.value=='Hours'){
            input.innerHTML = number.value
            output.innerHTML = number.value/3600
        }
        if (option2.value=='Days'){
            input.innerHTML = number.value
            output.innerHTML = number.value/86400
        }
    }


    // Minutes options
    if (option1.value=='Minutes'){        
        if (option2.value == option1.value){
            input.innerHTML = output.innerHTML = number.value
        }
        if (option2.value=='Seconds'){
            input.innerHTML = number.value
            output.innerHTML = number.value*60
        }
        if (option2.value=='Hours'){
            input.innerHTML = number.value
            output.innerHTML = number.value/60
        }
        if (option2.value=='Days'){
            input.innerHTML = number.value
            output.innerHTML = number.value/1440
        }
    }


    // Hours options    
    if (option1.value=='Hours'){
        if (option2.value == option1.value){
            input.innerHTML = output.innerHTML = number.value
        }
        if (option2.value=='Seconds'){
            input.innerHTML = number.value
            output.innerHTML = number.value*3600
        }
        if (option2.value=='Minutes'){
            input.innerHTML = number.value
            output.innerHTML = number.value*60
        }
        if (option2.value=='Days'){
            input.innerHTML = number.value
            output.innerHTML = number.value/24
        }
    }


    // Days options
    if (option1.value == 'Days'){
        if (option2.value == option1.value){
            input.innerHTML = output.innerHTML = number.value
        }
        if (option2.value=='Seconds'){
            input.innerHTML = number.value
            output.innerHTML = number.value*86400
        }
        if (option2.value=='Minutes'){
            input.innerHTML = number.value
            output.innerHTML = number.value*1440
        }
        if (option2.value=='Hours'){
            input.innerHTML = number.value
            output.innerHTML = number.value*24
        }
        }}