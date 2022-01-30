let input2 = document.getElementById('input2');
let result2 = document.getElementById('result2');
let inputType2 = document.getElementById('inputType2');
let resultType2 = document.getElementById('resultType2');
let inputTypeValue2,resultTypeValue2;


input2.addEventListener("keyup",myresult);
inputType2.addEventListener("change",myresult);
resultType2.addEventListener("change",myresult);

inputTypeValue2 = inputType2.value;
resultTypeValue2 = resultType2.value;

function myresult(){
    
    inputTypeValue2 = inputType2.value;
    resultTypeValue2 = resultType2.value;

    // 1

    if(inputTypeValue2 == "fluid-ounces" && resultTypeValue2 == "fluid-ounces"){
        result2.value = input2.value;

    }else if(inputTypeValue2 == "fluid-ounces" && resultTypeValue2 == "milliliters"){
        result2.value = Number(input2.value) * 29.5735;

    }else if(inputTypeValue2 == "fluid-ounces" && resultTypeValue2 == "gallons"){
        result2.value = Number(input2.value) / 128;
        
    }else if(inputTypeValue2 == "fluid-ounces" && resultTypeValue2 == "liters"){
        result2.value = Number(input2.value) / 33.814;
        
    }else if(inputTypeValue2 == "fluid-ounces" && resultTypeValue2 == "cubic-feet"){
        result2.value = Number(input2.value) / 958;

    }else if(inputTypeValue2 == "fluid-ounces" && resultTypeValue2 == "cubic-meters"){
        result2.value = Number(input2.value) / 33814;

    }else if(inputTypeValue2 == "fluid-ounces" && resultTypeValue2 == "cubic-yards"){
        result2.value = Number(input2.value) / 25853;

    }

    // 2

    if(inputTypeValue2 == "milliliters" && resultTypeValue2 == "fluid-ounces"){
        result2.value = Number(input2.value) / 28.413;

    }else if(inputTypeValue2 == "milliliters" && resultTypeValue2 == "milliliters"){
        result2.value = input2.value;

    }else if(inputTypeValue2 == "milliliters" && resultTypeValue2 == "gallons"){
        result2.value = Number(input2.value) / 3785;
        
    }else if(inputTypeValue2 == "milliliters" && resultTypeValue2 == "liters"){
        result2.value = Number(input2.value) / 1000;
        
    }else if(inputTypeValue2 == "milliliters" && resultTypeValue2 == "cubic-feet"){
        result2.value = Number(input2.value) / 28317;

    }else if(inputTypeValue2 == "milliliters" && resultTypeValue2 == "cubic-meters"){
        result2.value = Number(input2.value) / 1000000;

    }else if(inputTypeValue2 == "milliliters" && resultTypeValue2 == "cubic-yards"){
        result2.value = Number(input2.value) / 764555;

    }
    
    // 3

    if(inputTypeValue2 == "gallons" && resultTypeValue2 == "fluid-ounces"){
        result2.value = Number(input2.value) * 35.274;

    }else if(inputTypeValue2 == "gallons" && resultTypeValue2 == "milliliters"){
        result2.value = Number(input2.value) * 2.205;
        
    }else if(inputTypeValue2 == "gallons" && resultTypeValue2 == "gallons"){
        result2.value = input2.value;
        
    }else if(inputTypeValue2 == "gallons" && resultTypeValue2 == "liters"){
        result2.value = Number(input2.value) / 907;
        
    }else if(inputTypeValue2 == "gallons" && resultTypeValue2 == "cubic-feet"){
        result2.value = Number(input2.value) / 1000;

    }else if(inputTypeValue2 == "gallons" && resultTypeValue2 == "cubic-meters"){
        result2.value = Number(input2.value) / 1000000;

    }else if(inputTypeValue2 == "gallons" && resultTypeValue2 == "cubic-yards"){
        result2.value = Number(input2.value) / 202;

    }

    // 4

    if(inputTypeValue2 == "liters" && resultTypeValue2 == "fluid-ounces"){
        result2.value = Number(input2.value) * 33.814;

    }else if(inputTypeValue2 == "liters" && resultTypeValue2 == "milliliters"){
        result2.value = Number(input2.value) * 1000;
        
    }else if(inputTypeValue2 == "liters" && resultTypeValue2 == "gallons"){
        result2.value = Number(input2.value) / 3.785;
        
    }else if(inputTypeValue2 == "liters" && resultTypeValue2 == "liters"){
        result2.value = input2.value;
        
    }else if(inputTypeValue2 == "liters" && resultTypeValue2 == "cubic-feet"){
        result2.value = Number(input2.value) / 28.317;

    }else if(inputTypeValue2 == "liters" && resultTypeValue2 == "cubic-meters"){
        result2.value = Number(input2.value) / 1000;

    }else if(inputTypeValu2e == "liters" && resultTypeValue2 == "cubic-yards"){
        result2.value = Number(input2.value) / 765;

    }

    // 5

    if(inputTypeValue2 == "cubic-feet" && resultTypeValue2 == "fluid-ounces"){
        result2.value = Number(input2.value) * 957.506;

    }else if(inputTypeValue2 == "cubic-feet" && resultTypeValue2 == "milliliters"){
        result2.value = Number(input2.value) * 28317;
        
    }else if(inputTypeValue2 == "cubic-feet" && resultTypeValue2 == "gallons"){
        result2.value = Number(input2.value) * 7.481;
        
    }else if(inputTypeValue2 == "cubic-feet" && resultTypeValue2 == "liters"){
        result2.value = Number(input2.value) * 28.317;
        
    }else if(inputTypeValue2 == "cubic-feet" && resultTypeValue2 == "cubic-feet"){
        result2.value = input2.value;

    }else if(inputTypeValue2 == "cubic-feet" && resultTypeValue2 == "cubic-meters"){
        result2.value = Number(input2.value) / 35.315;

    }else if(inputTypeValue2 == "cubic-feet" && resultTypeValue2 == "cubic-yards"){
        result2.value = Number(input2.value) / 27;

    }

    // 6

    if(inputTypeValue2 == "cubic-meters" && resultTypeValue2 == "fluid-ounces"){
        result2.value = Number(input2.value) * 33814;

    }else if(inputTypeValue2 == "cubic-meters" && resultTypeValue2 == "milliliters"){
        result2.value = Number(input2.value) * 1000000;

    }else if(inputTypeValue2 == "cubic-meters" && resultTypeValue2 == "gallons"){
        result2.value = Number(input2.value) * 264;

    }else if(inputTypeValue2 == "cubic-meters" && resultTypeValue2 == "liters"){
        result2.value = Number(input2.value) * 1000;

    }else if(inputTypeValue2 == "cubic-meters" && resultTypeValue2 == "cubic-feet"){
        result2.value = Number(input2.value) * 35.315;

    }else if(inputTypeValue2 == "cubic-meters" && resultTypeValue2 == "cubic-meters"){
        result2.value = input2.value;

    }else if(inputTypeValue2 == "cubic-meters" && resultTypeValue2 == "cubic-yards"){
        result2.value = Number(input2.value) * 1.308;

    }

    // 7

    if(inputTypeValue2 == "cubic-yards" && resultTypeValue2 == "fluid-ounces"){
        result2.value = Number(input2.value) * 25853;

    }else if(inputTypeValue2 == "cubic-yards" && resultTypeValue2 == "milliliters"){
        result2.value = Number(input2.value) * 764555;

    }else if(inputTypeValue2 == "cubic-yards" && resultTypeValue2 == "gallons"){
        result2.value = Number(input2.value) * 202;

    }else if(inputTypeValue2 == "cubic-yards" && resultTypeValue2 == "liters"){
        result2.value = Number(input2.value) * 765;

    }else if(inputTypeValue2 == "cubic-yards" && resultTypeValue2 == "cubic-feet"){
        result2.value = Number(input2.value) * 27;

    }else if(inputTypeValue2 == "cubic-yards" && resultTypeValue2 == "cubic-meters"){
        result2.value = Number(input2.value) / 1.308;

    }else if(inputTypeValue2 == "cubic-yards" && resultTypeValue2 == "cubic-yards"){
        result2.value = input2.value;

    }

}