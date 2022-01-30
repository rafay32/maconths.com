let nput = document.getElementById('nput');
let esult = document.getElementById('esult');
let nputType = document.getElementById('nputType');
let esultType = document.getElementById('esultType');
let nputTypeValue,esultTypeValue;


nput.addEventListener("keyup",myresult);
nputType.addEventListener("change",myresult);
esultType.addEventListener("change",myresult);

nputTypeValue = nputType.value;
esultTypeValue = esultType.value;

function myresult(){
    
    nputTypeValue = nputType.value;
    esultTypeValue = esultType.value;

    // 1

    if(nputTypeValue == "ounces" && esultTypeValue == "ounces"){
        esult.value = nput.value;

    }else if(nputTypeValue == "ounces" && esultTypeValue == "grams"){
        esult.value = Number(nput.value) * 28.35;

    }else if(nputTypeValue == "ounces" && esultTypeValue == "pounds"){
        esult.value = Number(nput.value) * 0.0625;

    }else if(nputTypeValue == "ounces" && esultTypeValue == "kilograms"){
        esult.value = Number(nput.value) * 0.0283495;
        
    }else if(nputTypeValue == "ounces" && esultTypeValue == "short-tons"){
        esult.value = Number(nput.value) / 32000;
        

    }else if(nputTypeValue == "ounces" && esultTypeValue == "metric-ton"){
        esult.value = Number(nput.value) / 35274;

    }

    // 2

    if(nputTypeValue == "grams" && esultTypeValue == "ounces"){
        esult.value = Number(nput.value) / 35274;

    }else if(nputTypeValue == "grams" && esultTypeValue == "grams"){
        esult.value = nput.value;

    }else if(nputTypeValue == "grams" && esultTypeValue == "pounds"){
        esult.value = Number(nput.value) / 454;

    }else if(nputTypeValue == "grams" && esultTypeValue == "kilograms"){
        esult.value = Number(nput.value) / 1000;
        
    }else if(nputTypeValue == "grams" && esultTypeValue == "short-tons"){
        esult.value = Number(nput.value) / 907185;
        
    }else if(nputTypeValue == "grams" && esultTypeValue == "metric-ton"){
        esult.value = Number(nput.value) / 1000000;

    }

    // 3

    if(nputTypeValue == "pounds" && esultTypeValue == "ounces"){
        esult.value = Number(nput.value) * 16;

    }else if(nputTypeValue == "pounds" && esultTypeValue == "grams"){
        esult.value = Number(nput.value) * 454;
        
    }else if(nputTypeValue == "pounds" && esultTypeValue == "pounds"){
        esult.value = nput.value;

    }else if(nputTypeValue == "pounds" && esultTypeValue == "kilograms"){
        esult.value = Number(nput.value) / 2.205;
        
    }else if(nputTypeValue == "pounds" && esultTypeValue == "short-tons"){
        esult.value = Number(nput.value) / 2000;
        
    }else if(nputTypeValue == "pounds" && esultTypeValue == "metric-ton"){
        esult.value = Number(nput.value) / 2205;

    }
    
    // 4

    if(nputTypeValue == "kilograms" && esultTypeValue == "ounces"){
        esult.value = Number(nput.value) * 35.274;

    }else if(nputTypeValue == "kilograms" && esultTypeValue == "grams"){
        esult.value = Number(nput.value) * 1000;
        
    }else if(nputTypeValue == "kilograms" && esultTypeValue == "pounds"){
        esult.value = Number(nput.value) * 2.205;
        
    }else if(nputTypeValue == "kilograms" && esultTypeValue == "kilograms"){
        esult.value = nput.value;
        
    }else if(nputTypeValue == "kilograms" && esultTypeValue == "short-tons"){
        esult.value = Number(nput.value) / 907;
        
    }else if(nputTypeValue == "kilograms" && esultTypeValue == "metric-ton"){
        esult.value = Number(nput.value) / 1000;

    }

    // 5

    if(nputTypeValue == "short-tons" && esultTypeValue == "ounces"){
        esult.value = Number(nput.value) * 32000;

    }else if(nputTypeValue == "short-tons" && esultTypeValue == "grams"){
        esult.value = Number(nput.value) * 907185;
        
    }else if(nputTypeValue == "short-tons" && esultTypeValue == "pounds"){
        esult.value = Number(nput.value) * 2000;
        
    }else if(nputTypeValue == "short-tons" && esultTypeValue == "kilograms"){
        esult.value = Number(nput.value) * 907;
        
    }else if(nputTypeValue == "short-tons" && esultTypeValue == "short-tons"){
        esult.value = nput.value;
        
    }else if(nputTypeValue == "short-tons" && esultTypeValue == "metric-ton"){
        esult.value = Number(nput.value) / 1.102;

    }

    // 6

    if(nputTypeValue == "metric-ton" && esultTypeValue == "ounces"){
        esult.value = Number(nput.value) * 35274;

    }else if(nputTypeValue == "metric-ton" && esultTypeValue == "grams"){
        esult.value = Number(nput.value) * 1000000;
        
    }else if(nputTypeValue == "metric-ton" && esultTypeValue == "pounds"){
        esult.value = Number(nput.value) * 2205;
        
    }else if(nputTypeValue == "metric-ton" && esultTypeValue == "kilograms"){
        esult.value = Number(nput.value) * 1000;
        
    }else if(nputTypeValue == "metric-ton" && esultTypeValue == "short-tons"){
        esult.value = Number(nput.value) * 1.102;
        
    }else if(nputTypeValue == "metric-ton" && esultTypeValue == "metric-ton"){
        esult.value = nput.value;

    }

}