let put = document.getElementById('put');
let sult = document.getElementById('sult');
let putType = document.getElementById('putType');
let sultType = document.getElementById('sultType');
let putTypeValue,sultTypeValue;


put.addEventListener("keyup",myresult);
putType.addEventListener("change",myresult);
sultType.addEventListener("change",myresult);

putTypeValue = putType.value;
sultTypeValue = sultType.value;

function myresult(){
    
    putTypeValue = putType.value;
    sultTypeValue = sultType.value;

    // 1

    if(putTypeValue == "square-miles" && sultTypeValue == "square-miles"){
        sult.value = put.value;

    }else if(putTypeValue == "square-miles" && sultTypeValue == "square-yards"){
        sult.value = Number(put.value) * 3.098e+6;

    }else if(putTypeValue == "square-miles" && sultTypeValue == "square-kilometer"){
        sult.value = Number(put.value) * 2.58999;

    }else if(putTypeValue == "square-miles" && sultTypeValue == "square-meter"){
        sult.value = Number(put.value) * 2.59e+6;
        
    }else if(putTypeValue == "square-miles" && sultTypeValue == "square-feet"){
        sult.value = Number(put.value) * 2.788e+7;
        

    }else if(putTypeValue == "square-miles" && sultTypeValue == "square-inches"){
        sult.value = Number(put.value) * 4.014e+9;

    }else if(putTypeValue == "square-miles" && sultTypeValue == "acres"){
        sult.value = Number(put.value) * 640;

    }else if(putTypeValue == "square-miles" && sultTypeValue == "hectares"){
        sult.value = Number(put.value) * 258.999;
    }

    // 2

    if(putTypeValue == "square-yards" && sultTypeValue == "square-miles"){
        sult.value = Number(put.value) * 3.2283e-7;

    }else if(putTypeValue == "square-yards" && sultTypeValue == "square-yards"){
        sult.value = put.value;

    }else if(putTypeValue == "square-yards" && sultTypeValue == "square-kilometer"){
        sult.value = Number(put.value) * 8.3613e-7;

    }else if(putTypeValue == "square-yards" && sultTypeValue == "square-meter"){
        sult.value = Number(put.value) * 0.836127;
        
    }else if(putTypeValue == "square-yards" && sultTypeValue == "square-feet"){
        sult.value = Number(put.value) * 9;
        
    }else if(putTypeValue == "square-yards" && sultTypeValue == "square-inches"){
        sult.value = Number(put.value) * 1296;

    }else if(putTypeValue == "square-yards" && sultTypeValue == "acres"){
        sult.value = Number(put.value) * 0.000206612;

    }else if(putTypeValue == "square-yards" && sultTypeValue == "hectares"){
        esult.value = Number(put.value) * 8.3613e-5;
    }

    // 3

    if(putTypeValue == "square-kilometer" && sultTypeValue == "square-miles"){
        sult.value = Number(put.value) * 0.386102;

    }else if(putTypeValue == "square-kilometer" && sultTypeValue == "square-yards"){
        sult.value = Number(put.value) * 1.196e+6;
        
    }else if(putTypeValue == "square-kilometer" && sultTypeValue == "square-kilometer"){
        sult.value = put.value;

    }else if(putTypeValue == "square-kilometer" && sultTypeValue == "square-meter"){
        sult.value = Number(put.value) * 1e+6;
        
    }else if(putTypeValue == "square-kilometer" && sultTypeValue == "square-feet"){
        sult.value = Number(put.value) * 1.076e+7;
        
    }else if(putTypeValue == "square-kilometer" && sultTypeValue == "square-inches"){
        sult.value = Number(put.value) * 1.55e+9;

    }else if(putTypeValue == "square-kilometer" && sultTypeValue == "acres"){
        sult.value = Number(put.value) * 247.105;

    }else if(putTypeValue == "square-kilometer" && sultTypeValue == "hectares"){
        sult.value = Number(put.value) * 100;
    }

    // 4

    if(putTypeValue == "square-meter" && sultTypeValue == "square-miles"){
        sult.value = Number(put.value) * 3.861e-7;

    }else if(putTypeValue == "square-meter" && sultTypeValue == "square-yards"){
        sult.value = Number(put.value) * 1.19599;
        
    }else if(putTypeValue == "square-meter" && sultTypeValue == "square-kilometer"){
        sult.value = Number(put.value) * 1e-6;
        
    }else if(putTypeValue == "square-meter" && sultTypeValue == "square-meter"){
        sult.value = put.value;
        
    }else if(putTypeValue == "square-meter" && sultTypeValue == "square-feet"){
        sult.value = Number(put.value) * 10.7639;
        
    }else if(putTypeValue == "square-meter" && sultTypeValue == "square-inches"){
        sult.value = Number(put.value) * 1550;

    }else if(putTypeValue == "square-meter" && sultTypeValue == "acres"){
        sult.value = Number(put.value) * 0.000247105;

    }else if(putTypeValue == "square-meter" && sultTypeValue == "hectares"){
        sult.value = Number(put.value) * 1e-4;
    }

    // 5

    if(putTypeValue == "square-feet" && sultTypeValue == "square-miles"){
        sult.value = Number(put.value) * 3.587e-8;

    }else if(putTypeValue == "square-feet" && sultTypeValue == "square-yards"){
        sult.value = Number(put.value) * 0.111111;
        
    }else if(putTypeValue == "square-feet" && sultTypeValue == "square-kilometer"){
        sult.value = Number(put.value) * 9.2903e-8;
        
    }else if(putTypeValue == "square-feet" && sultTypeValue == "square-meter"){
        sult.value = Number(put.value) * 0.092903;
        
    }else if(putTypeValue == "square-feet" && sultTypeValue == "square-feet"){
        sult.value = put.value;
        
    }else if(putTypeValue == "square-feet" && sultTypeValue == "square-inches"){
        sult.value = Number(put.value) * 144;

    }else if(putTypeValue == "square-feet" && sultTypeValue == "acres"){
        sult.value = Number(put.value) * 2.2957e-5;

    }else if(putTypeValue == "square-feet" && sultTypeValue == "hectares"){
        sult.value = Number(put.value) * 9.2903e-6;
    }

    // 6

    if(putTypeValue == "square-inches" && sultTypeValue == "square-miles"){
        sult.value = Number(put.value) * 2.491e-10;

    }else if(putTypeValue == "square-inches" && sultTypeValue == "square-yards"){
        sult.value = Number(put.value) * 0.000771605;
        
    }else if(putTypeValue == "square-inches" && sultTypeValue == "square-kilometer"){
        sult.value = Number(put.value) * 6.4516e-10;
        
    }else if(putTypeValue == "square-inches" && sultTypeValue == "square-meter"){
        sult.value = Number(put.value) * 0.00064516;
        
    }else if(putTypeValue == "square-inches" && sultTypeValue == "square-feet"){
        sult.value = Number(put.value) * 0.00694444;
        
    }else if(putTypeValue == "square-inches" && sultTypeValue == "square-inches"){
        sult.value = put.value;

    }else if(putTypeValue == "square-inches" && sultTypeValue == "acres"){
        sult.value = Number(put.value) * 1.5942e-7;

    }else if(putTypeValue == "square-inches" && sultTypeValue == "hectares"){
        sult.value = Number(put.value) * 6.4516e-8;
    }

    // 7

    if(putTypeValue == "acres" && sultTypeValue == "square-miles"){
        sult.value = Number(put.value) * 0.0015625;

    }else if(putTypeValue == "acres" && sultTypeValue == "square-yards"){
        sult.value = Number(put.value) * 4840;
        
    }else if(putTypeValue == "acres" && sultTypeValue == "square-kilometer"){
        sult.value = Number(put.value) * 0.00404686;
        
    }else if(putTypeValue == "acres" && sultTypeValue == "square-meter"){
        sult.value = Number(put.value) * 4046.86;
        
    }else if(putTypeValue == "acres" && sultTypeValue == "square-feet"){
        sult.value = Number(put.value) * 43560;
        
    }else if(putTypeValue == "acres" && sultTypeValue == "square-inches"){
        sult.value = Number(put.value) * 6.273e+6;
        
    }else if(putTypeValue == "acres" && sultTypeValue == "acres"){
        sult.value = put.value;

    }else if(putTypeValue == "acres" && sultTypeValue == "hectares"){
        sult.value = Number(put.value) * 0.404686;
    }

    // 8

    if(putTypeValue == "hectares" && sultTypeValue == "square-miles"){
        sult.value = Number(put.value) * 0.00386102;

    }else if(putTypeValue == "hectares" && sultTypeValue == "square-yards"){
        sult.value = Number(put.value) * 11959.9;
        
    }else if(putTypeValue == "hectares" && sultTypeValue == "square-kilometer"){
        sult.value = Number(put.value) * 0.01;
        
    }else if(putTypeValue == "hectares" && sultTypeValue == "square-meter"){
        sult.value = Number(put.value) * 10000;
        
    }else if(putTypeValue == "hectares" && sultTypeValue == "square-feet"){
        sult.value = Number(put.value) * 107639;
        
    }else if(putTypeValue == "hectares" && sultTypeValue == "square-inches"){
        sult.value = Number(put.value) * 1.55e+7;
        
    }else if(putTypeValue == "hectares" && sultTypeValue == "acres"){
        sult.value = Number(put.value) * 2.47105;
        
    }else if(putTypeValue == "hectares" && sultTypeValue == "hectares"){
        sult.value = put.value;
    }

}