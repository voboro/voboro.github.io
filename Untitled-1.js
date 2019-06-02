function ifelsefunction() { 
    var y, varA,varB, dec; 
    
    y = 0;
    varA = document.getElementById("selectbFHR").value;    
    varB = document.getElementById("selectvar").value;   
    dec = document.getElementById("selectdec").value;  
    
    if (varA == "160 bpm or rising"){
    y = y + 1;
        }
    if (varB == "3-5 bpm"){
    y = y + 1; 
        }
    if (dec == "Late or complicated"){
    y = y + 1; 
        }
    
         if(varA == "< 100 bpm for > 5min" || varB == "< 3 bpm or sinusoidal" || y >= 2){
            document.getElementById("advice").innerHTML= "Red";
             }
         else if(y >= 1) {
            document.getElementById("advice").innerHTML= "Yellow";
        }
        else{
            document.getElementById("advice").innerHTML= "Green";
        }
    }