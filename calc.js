function calculator(opr){    
    var calc = window.document.getElementById('calculator');
    var angka1 = parseFloat(calc.angka1.value); 
    var angka2 = parseFloat(calc.angka2.value);
    if (isNaN(angka1) && isNaN(angka2)) {
        calc.result.value = alert ("Maaf yang anda inputkan bukan nomor");
    }else{
    switch(opr){
        case '+': calc.result.value = angka1 + angka2; break;
        case '-': calc.result.value = angka1 - angka2; break;
        case '*': calc.result.value = angka1 * angka2; break;
        case '/': calc.result.value = angka1 / angka2; break;
        case '**': calc.result.value = angka1 ** angka2; break;
        default: calc.result.value = 0;
    }
    }
    
    }