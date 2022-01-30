let input1 = document.getElementById('input1');
let result1 = document.getElementById('result1');
let inputType1 = document.getElementById('inputType1');
let resultType1 = document.getElementById('resultType1');
let inputTypeValue1,resultTypeValue1;


input1.addEventListener("keyup",myresult);
inputType1.addEventListener("change",myresult);
resultType1.addEventListener("change",myresult);

inputTypeValue1 = inputType1.value;
resultTypeValue1 = resultType1.value;

function myresult(){
    
    inputTypeValue1 = inputType1.value;
    resultTypeValue1 = resultType1.value;

    // 1

    if(inputTypeValue1 == "celsius" && resultTypeValue1 == "celsius"){
        result1.value = input1.value;

    }else if(inputTypeValue1 == "celsius" && resultTypeValue1 == "farhenheit"){
        result1.value = Number(input1.value) * (9/5) + 32;

    }

    // 2

    if(inputTypeValue1 == "farhenheit" && resultTypeValue1 == "celsius"){
        result1.value = Number(input1.value -32) * (5/9) ;

    }else if(inputTypeValue1 == "farhenheit" && resultTypeValue1 == "farhenheit"){
        result1.value = input1.value;

    }

}