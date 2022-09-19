var someVar = 20;
var someOtherVar = 30;

function sum(a,b){
    var result = a + b;

    return result;
}


var summa = (a,b) => a+b;

var result = summa(1,4)



var ar = [1,2,3,4];

var newArr = ar.map(function(i){
    return i*i
})

//////////////////Запись через стрелочную функцию

var newArrStr = ar.map(i => i*i)

//var - публичная переменная со всплытием
//let - переменная без всплытия
//const - постоянная констранта, не способная к изменению