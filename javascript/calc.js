var Numfield1 = document.getElementById('numfield1');
var Numfield2 = document.getElementById('numfield2');
var Resultfield = document.getElementById('resultfield');

var form = document.getElementById('XperY');
form.addEventListener('submit' , function(event){
    if(!Numfield1.value || !Numfield2.value){
        alert("Please enter the value.")
    }
    else{
        var x = parseFloat(Numfield1.value);
        var y = parseFloat(Numfield2.value);
        
        var result = x/y;
        var percent = result*100;
        
        Resultfield.innerText = "Answer is " + percent +"%";
        event.preventDefault();
    }
} );