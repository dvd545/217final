$ = function(id) {
    return document.getElementById(id); 
}


function updateDisplay(optbutnVal) {
    
    display = $("inputDisplay");
    
    var addOp = function(str, op) {

        opStr = "+-/*";
        
        if (opStr.indexOf(str.charAt(str.length-1)) !== -1) {
            str = str.substring(0,str.length-1) + op;
        } else {
            str = str + op;
        }
        
        
        return str;
    };
    
    var addDecPoint = function(str) {
        str += display.value.charAt(display.value.length-1) == '.' ? "" : ".";
        return str; 
    }; 
    
    switch (optbutnVal) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            
            display.value += optbutnVal;
            break;
        
        case '.':
            
            display.value = addDecPoint(display.value);
            break;
        
        case '+':
        case '-':
        case '*':
        case '/':
            
            display.value = addOp(display.value, optbutnVal);
            break;
        
        case 'clear':
            display.value = "";
            break; 
        case 'backspace':
         
            display.value = display.value.slice(0, -1);
            break;
        
        case '=':
            calculate();
            
            break;
        default:
            break;     array
    }
}

function calculate() {
    var qString = "q=" + encodeURIComponent($('inputDisplay').value);

    xmlhttp = getXMLhttp();
    
    xmlhttp.onreadystatechange=function() {
        
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
                { 
                    document.getElementById("inputDisplay").value=xmlhttp.responseText;
                }
    }
      
    xmlhttp.open("POST","/is217hw3/calc",false);
    
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    
    xmlhttp.send(qString);

}

function optbutnClick(evt) {
    var getText = function(obj) {
        return obj.textContent ? obj.textContent : obj.innerText; 
    }; 

    updateDisplay(getText(evt.target.firstChild).toLowerCase());
   
    
}

function getChar(evt) {
    console.log(evt.charCode);
    console.log(String.fromCharCode(evt.charCode));
    
    updateDisplay(String.fromCharCode(evt.charCode));

    evt.preventDefault(); 
}

function init() {
    optbutnArr = document.getElementsByTagName('button');
    
    if (undefined != optbutnArr) {
        for(var i = 0; i < optbutnArr.length; i++) {
            optbutnArr[i].onclick = optbutnClick;
        }
    }
    
    $("inputDisplay").onkeypress = getChar;
}

window.onload = function() {
    init(); 
}