let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;


input.addEventListener("keyup",myresult);
inputType.addEventListener("change",myresult);
resultType.addEventListener("change",myresult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myresult(){
    
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // 1

    if(inputTypeValue == "miles" && resultTypeValue == "miles"){
        result.value = input.value;

    }else if(inputTypeValue == "miles" && resultTypeValue == "yards"){
        result.value = Number(input.value) * 1760;

    }else if(inputTypeValue == "miles" && resultTypeValue == "kilometer"){
        result.value = Number(input.value) * 1.60934;

    }else if(inputTypeValue == "miles" && resultTypeValue == "meter"){
        result.value = Number(input.value) * 1609.34;
        
    }else if(inputTypeValue == "miles" && resultTypeValue == "feet"){
        result.value = Number(input.value) * 5279.98687656;
        

    }else if(inputTypeValue == "miles" && resultTypeValue == "inches"){
        result.value = Number(input.value) * 63359.842518720004591;

    }else if(inputTypeValue == "miles" && resultTypeValue == "centimeter"){
        result.value = Number(input.value) * 160934;

    }else if(inputTypeValue == "miles" && resultTypeValue == "milimeter"){
        result.value = Number(input.value) * 1609340.0007802;
    }

    // 2

    if(inputTypeValue == "yards" && resultTypeValue == "miles"){
        result.value = Number(input.value) * 0.000568182;

    }else if(inputTypeValue == "yards" && resultTypeValue == "yards"){
        result.value = input.value;

    }else if(inputTypeValue == "yards" && resultTypeValue == "kilometer"){
        result.value = Number(input.value) * 0.0009144;

    }else if(inputTypeValue == "yards" && resultTypeValue == "meter"){
        result.value = Number(input.value) * 0.9144;
        
    }else if(inputTypeValue == "yards" && resultTypeValue == "feet"){
        result.value = Number(input.value) * 3;
        
    }else if(inputTypeValue == "yards" && resultTypeValue == "inches"){
        result.value = Number(input.value) * 36;

    }else if(inputTypeValue == "yards" && resultTypeValue == "centimeter"){
        result.value = Number(input.value) * 91.44;

    }else if(inputTypeValue == "yards" && resultTypeValue == "milimeter"){
        result.value = Number(input.value) * 914.4;
    }

    // 3

    if(inputTypeValue == "kilometer" && resultTypeValue == "miles"){
        result.value = Number(input.value) * 0.621371;

    }else if(inputTypeValue == "kilometer" && resultTypeValue == "yards"){
        result.value = Number(input.value) * 1093.61;
        
    }else if(inputTypeValue == "kilometer" && resultTypeValue == "kilometer"){
        result.value = input.value;

    }else if(inputTypeValue == "kilometer" && resultTypeValue == "meter"){
        result.value = Number(input.value) * 1000;
        
    }else if(inputTypeValue == "kilometer" && resultTypeValue == "feet"){
        result.value = Number(input.value) * 3280.84;
        
    }else if(inputTypeValue == "kilometer" && resultTypeValue == "inches"){
        result.value = Number(input.value) * 39370.1;

    }else if(inputTypeValue == "kilometer" && resultTypeValue == "centimeter"){
        result.value = Number(input.value) * 100000;

    }else if(inputTypeValue == "kilometer" && resultTypeValue == "milimeter"){
        result.value = Number(input.value) * 1000000;
    }

    // 4

    if(inputTypeValue == "meter" && resultTypeValue == "miles"){
        result.value = Number(input.value) * 0.000621371;

    }else if(inputTypeValue == "meter" && resultTypeValue == "yards"){
        result.value = Number(input.value) * 1.09361;
        
    }else if(inputTypeValue == "meter" && resultTypeValue == "kilometer"){
        result.value = Number(input.value) * 0.001;
        
    }else if(inputTypeValue == "meter" && resultTypeValue == "meter"){
        result.value = input.value;
        
    }else if(inputTypeValue == "meter" && resultTypeValue == "feet"){
        result.value = Number(input.value) * 3.281;
        
    }else if(inputTypeValue == "meter" && resultTypeValue == "inches"){
        result.value = Number(input.value) * 39.3701;

    }else if(inputTypeValue == "meter" && resultTypeValue == "centimeter"){
        result.value = Number(input.value) * 100;

    }else if(inputTypeValue == "meter" && resultTypeValue == "milimeter"){
        result.value = Number(input.value) * 1000;
    }

    // 5

    if(inputTypeValue == "feet" && resultTypeValue == "miles"){
        result.value = Number(input.value) * 0.000189394;

    }else if(inputTypeValue == "feet" && resultTypeValue == "yards"){
        result.value = Number(input.value) * 0.333333;
        
    }else if(inputTypeValue == "feet" && resultTypeValue == "kilometer"){
        result.value = Number(input.value) * 0.0003048;
        
    }else if(inputTypeValue == "feet" && resultTypeValue == "meter"){
        result.value = Number(input.value) * 0.3048;
        
    }else if(inputTypeValue == "feet" && resultTypeValue == "feet"){
        result.value = input.value;
        
    }else if(inputTypeValue == "feet" && resultTypeValue == "inches"){
        result.value = Number(input.value) * 12;

    }else if(inputTypeValue == "feet" && resultTypeValue == "centimeter"){
        result.value = Number(input.value) * 30.48;

    }else if(inputTypeValue == "feet" && resultTypeValue == "milimeter"){
        result.value = Number(input.value) * 304.8;
    }

    // 6

    if(inputTypeValue == "inches" && resultTypeValue == "miles"){
        result.value = Number(input.value) * 1.5783e-5;

    }else if(inputTypeValue == "inches" && resultTypeValue == "yards"){
        result.value = Number(input.value) * 0.0277778;
        
    }else if(inputTypeValue == "inches" && resultTypeValue == "kilometer"){
        result.value = Number(input.value) * 2.54e-5;
        
    }else if(inputTypeValue == "inches" && resultTypeValue == "meter"){
        result.value = Number(input.value) * 0.0254;
        
    }else if(inputTypeValue == "inches" && resultTypeValue == "feet"){
        result.value = Number(input.value) * 0.0833333;
        
    }else if(inputTypeValue == "inches" && resultTypeValue == "inches"){
        result.value = input.value;

    }else if(inputTypeValue == "inches" && resultTypeValue == "centimeter"){
        result.value = Number(input.value) * 2.54;

    }else if(inputTypeValue == "inches" && resultTypeValue == "milimeter"){
        result.value = Number(input.value) * 25.4;
    }

    // 7

    if(inputTypeValue == "centimeter" && resultTypeValue == "miles"){
        result.value = Number(input.value) * 6.2137e-6;

    }else if(inputTypeValue == "centimeter" && resultTypeValue == "yards"){
        result.value = Number(input.value) * 0.0109361;
        
    }else if(inputTypeValue == "centimeter" && resultTypeValue == "kilometer"){
        result.value = Number(input.value) * 1e-5;
        
    }else if(inputTypeValue == "centimeter" && resultTypeValue == "meter"){
        result.value = Number(input.value) * 0.01;
        
    }else if(inputTypeValue == "centimeter" && resultTypeValue == "feet"){
        result.value = Number(input.value) * 0.0328084;
        
    }else if(inputTypeValue == "centimeter" && resultTypeValue == "inches"){
        result.value = Number(input.value) * 0.393701;
        
    }else if(inputTypeValue == "centimeter" && resultTypeValue == "centimeter"){
        result.value = input.value;

    }else if(inputTypeValue == "centimeter" && resultTypeValue == "milimeter"){
        result.value = Number(input.value) * 10;
    }

    // 8

    if(inputTypeValue == "milimeter" && resultTypeValue == "miles"){
        result.value = Number(input.value) * 6.2137e-7;

    }else if(inputTypeValue == "milimeter" && resultTypeValue == "yards"){
        result.value = Number(input.value) * 0.00109361;
        
    }else if(inputTypeValue == "milimeter" && resultTypeValue == "kilometer"){
        result.value = Number(input.value) * 1e-6;
        
    }else if(inputTypeValue == "milimeter" && resultTypeValue == "meter"){
        result.value = Number(input.value) * 0.001;
        
    }else if(inputTypeValue == "milimeter" && resultTypeValue == "feet"){
        result.value = Number(input.value) * 0.00328084;
        
    }else if(inputTypeValue == "milimeter" && resultTypeValue == "inches"){
        result.value = Number(input.value) * 0.0393701;
        
    }else if(inputTypeValue == "milimeter" && resultTypeValue == "centimeter"){
        result.value = Number(input.value) * 0.1;
        
    }else if(inputTypeValue == "milimeter" && resultTypeValue == "milimeter"){
        result.value = input.value;
    }

}