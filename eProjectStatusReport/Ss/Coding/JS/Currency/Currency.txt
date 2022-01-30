let ut = document.getElementById('ut');
let ult = document.getElementById('ult');
let utType = document.getElementById('utType');
let ultType = document.getElementById('ultType');
let utTypeValue,ultTypeValue;


ut.addEventListener("keyup",myresult);
utType.addEventListener("change",myresult);
ultType.addEventListener("change",myresult);

utTypeValue = utType.value;
ultTypeValue = ultType.value;

function myresult(){
    
    utTypeValue = utType.value;
    ultTypeValue = ultType.value;

    // 1

    if(utTypeValue == "USD" && ultTypeValue == "USD"){
        ult.value = ut.value;

    }else if(utTypeValue == "USD" && ultTypeValue == "EUR"){
        ult.value = Number(ut.value) * 0.84;

    }else if(utTypeValue == "USD" && ultTypeValue == "GBP"){
        ult.value = Number(ut.value) * 0.72;

    }else if(utTypeValue == "USD" && ultTypeValue == "CAD"){
        ult.value = Number(ut.value) * 1.25;
        
    }else if(utTypeValue == "USD" && ultTypeValue == "INR"){
        ult.value = Number(ut.value) * 72.49;
        

    }else if(utTypeValue == "USD" && ultTypeValue == "PKR"){
        ult.value = Number(ut.value) * 156.06;

    }

    // 2

    if(utTypeValue == "EUR" && ultTypeValue == "USD"){
        ult.value = Number(ut.value) * 1.19;

    }else if(utTypeValue == "EUR" && ultTypeValue == "EUR"){
        ult.value = ut.value;

    }else if(utTypeValue == "EUR" && ultTypeValue == "GBP"){
        ult.value = Number(ut.value) * 0.85;

    }else if(utTypeValue == "EUR" && ultTypeValue == "CAD"){
        ult.value = Number(ut.value) * 1.48;
        
    }else if(utTypeValue == "EUR" && ultTypeValue == "INR"){
        ult.value = Number(ut.value) * 86.24;
        
    }else if(utTypeValue == "EUR" && ultTypeValue == "PKR"){
        ult.value = Number(ut.value) * 85.671;

    }

    // 3

    if(utTypeValue == "GBP" && ultTypeValue == "USD"){
        ult.value = Number(ut.value) * 1.39;

    }else if(utTypeValue == "GBP" && ultTypeValue == "EUR"){
        ult.value = Number(ut.value) * 1.17;
        
    }else if(utTypeValue == "GBP" && ultTypeValue == "GBP"){
        ult.value = ut.value;

    }else if(utTypeValue == "GBP" && ultTypeValue == "CAD"){
        ult.value = Number(ut.value) * 1.74;
        
    }else if(utTypeValue == "GBP" && ultTypeValue == "INR"){
        ult.value = Number(ut.value) * 100.86;
        
    }else if(utTypeValue == "GBP" && ultTypeValue == "PKR"){
        ult.value = Number(ut.value) * 217.18;

    }
    
    // 4

    if(utTypeValue == "CAD" && ultTypeValue == "USD"){
        ult.value = Number(put.value) * 0.80;

    }else if(utTypeValue == "CAD" && ultTypeValue == "EUR"){
        ult.value = Number(ut.value) * 0.67;
        
    }else if(utTypeValue == "CAD" && ultTypeValue == "GBP"){
        ult.value = Number(ut.value) * 0.58;
        
    }else if(utTypeValue == "CAD" && ultTypeValue == "CAD"){
        ult.value = ut.value;
        
    }else if(utTypeValue == "CAD" && ultTypeValue == "INR"){
        ult.value = Number(ut.value) * 58.08;
        
    }else if(utTypeValue == "CAD" && ultTypeValue == "PKR"){
        ult.value = Number(ut.value) * 125.07;

    }

    // 5

    if(utTypeValue == "INR" && ultTypeValue == "USD"){
        ult.value = Number(ut.value) * 0.014;

    }else if(utTypeValue == "INR" && ultTypeValue == "EUR"){
        ult.value = Number(ut.value) * 0.012;
        
    }else if(utTypeValue == "INR" && ultTypeValue == "GBP"){
        ult.value = Number(ut.value) * 0.0099;
        
    }else if(utTypeValue == "INR" && ultTypeValue == "CAD"){
        ult.value = Number(ut.value) * 0.017;
        
    }else if(utTypeValue == "INR" && ultTypeValue == "INR"){
        ult.value = ut.value;
        
    }else if(utTypeValue == "INR" && ultTypeValue == "PKR"){
        ult.value = Number(ut.value) * 2.15;

    }

    // 6

    if(utTypeValue == "PKR" && ultTypeValue == "USD"){
        ult.value = Number(ut.value) * 0.0064;

    }else if(utTypeValue == "PKR" && ultTypeValue == "EUR"){
        ult.value = Number(ut.value) * 0.0054;
        
    }else if(utTypeValue == "PKR" && ultTypeValue == "GBP"){
        ult.value = Number(ut.value) * 0.0046;
        
    }else if(utTypeValue == "PKR" && ultTypeValue == "CAD"){
        ult.value = Number(ut.value) * 0.0080;
        
    }else if(utTypeValue == "PKR" && ultTypeValue == "INR"){
        ult.value = Number(ut.value) * 0.46;
        
    }else if(utTypeValue == "PKR" && ultTypeValue == "PKR"){
        ult.value = ut.value;

    }

}