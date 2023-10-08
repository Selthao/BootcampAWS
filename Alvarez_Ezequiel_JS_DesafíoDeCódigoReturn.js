//1
function hello() {	        //Define una función llamada hello
    console.log('hola');	//Imprime 'hola' en la consola
    }	                    //Cierra la definición de la función
    hello();	            //Llama a la función hello
    console.log('Dojo');	//Imprime ‘Dojo’ en la consola
                            

//2
    function hello() {      //Define una función llamada hello 
    console.log('hola');    //Imprime 'hola' en la consola 
    return 15;              //Devuelve el número 15 
}                           //Cierra la definición de la función 
var result = hello();       //Define una variable que será igual a la función hello 
console.log('el resultado es', result); // Imprime 'hola el resultado es 15'


//3
function numPlus(num) {         //Define una función llamada numPlus que recibe un parámetro llamado num
    console.log('num es', num); //Imprime ‘num es’ y el valor de num en la consola 
    return num+15;              //Devuelve el valor de num más 15
}                               //Cierra la definición de la función
var result = numPlus(3);        //Declara una variable llamada result y le asigna el valor que devuelve la función numPlus cuando se le pasa el argumento 3
console.log('x es', result);    //Imprime num es 3 x es 18



//4
var num = 15;                   //Declara una variable llamada num y le asigna el valor 15   //Imprime el valor de num (15) en la consola
console.log(num);               //Imprime el valor de num (15) en la consola
function logAndReturn(num){     //Define una función llamada logAndReturn que recibe un parámetro llamado num
   console.log(num);            //Imprime el valor de num (el parámetro de la función) en la consola
   return num;                  //Devuelve el valor de num (el parámetro de la función)
}                               //Cierra la definición de la función
var result = logAndReturn(10);  //Declara una variable llamada result y le asigna el valor que devuelve la función logAndReturn cuando se le pasa el argumento 10
console.log(result);            //Imprime el valor de result (10) en la consola
console.log(num);               //Imprime el valor de num (15) en la consola



//5
var num = 15;                   //Declara una variable llamada num y le asigna el valor 15
console.log(num);               //Imprime el valor de num (15) en la consola
function timesTwo(num){         //Define una función llamada timesTwo que recibe un parámetro llamado num
   console.log(num);            //Imprime el valor de num (el parámetro de la función) en la consola
   return num*2;                //Devuelve el valor de num (el parámetro de la función) multiplicado por 2
}                               //Cierra la definición de la función
var result = timesTwo(10);      //Declara una variable llamada result y le asigna el valor que devuelve la función timesTwo cuando se le pasa el argumento 10
console.log(result);            //Imprime el valor de result (20) en la consola
console.log(num);               //Imprime el valor de num (15) en la consola



//6
function timesTwoAgain(num) {   //Define una función llamada timesTwoAgain que recibe un parámetro llamado num
    console.log('num es', num); //Imprime ‘num es’ y el valor de num en la consola
    y = num*2;                  //Declara una variable llamada y y le asigna el valor de num multiplicado por 2
    return y;                   //Devuelve el valor de y
}                               //Cierra la definición de la función
var result = timesTwoAgain(3) + timesTwoAgain(5); //Declara una variable llamada result y le asigna el valor de la suma de dos llamadas a la función timesTwoAgain con los argumentos 3 y 5
console.log('el resultado es', result);           //Imprime ‘el resultado es’ 16 en la consola



//7
function sumNums(num1, num2) {  //Define una función llamada sumNums que recibe dos parámetros llamados num1 y num2
    return num1+num2;           //Devuelve la suma de los valores de num1 y num2
 }                              //Devuelve la suma de los valores de num1 y num2
 console.log(sumNums(2,3))      //Imprime el valor que devuelve la función sumNums cuando se le pasan los argumentos 2 y 3 (5) en la consola
 console.log(sumNums(3,5))      //Imprime el valor que devuelve la función sumNums cuando se le pasan los argumentos 3 y 5 (8) en la consola

 


 //8
 function printSumNums(num1, num2) { //Define una función llamada printSumNums que recibe dos parámetros llamados num1 y num2
    console.log(num1);               //Imprime el valor de num1 (el primer parámetro de la función) en la consola
    return num1+num2;                //Devuelve la suma de los valores de num1 y num2
 }                                   //Cierra la definición de la función
 console.log(printSumNums(2,3))      //Imprime el valor que devuelve la función printSumNums cuando se le pasan los argumentos 2 y 3 (5) en la consola
 console.log(printSumNums(3,5))      //Imprime el valor que devuelve la función printSumNums cuando se le pasan los argumentos 3 y 5 (8) en la consola

 


 //9
 function sumNums(num1, num2) {     //Define una función llamada sumNums que recibe dos parámetros llamados num1 y num2
    var sum = num1 + num2;          //Declara una variable local llamada sum y le asigna la suma de los valores de num1 y num2
    console.log('sum es', sum);     //Imprime ‘sum es’ y el valor de sum en la consola (5) (8)
    return sum;                     //Devuelve el valor de sum
}                                   //Cierra la definición de la función
var result = sumNums(2,3) + sumNums(3,5); //Declara una variable global llamada result y le asigna el valor de la suma de dos llamadas a la función sumNums con los argumentos 2 y 3, y con los argumentos 3 y 5
console.log('el resultado es', result);   //Imprime ‘el resultado es’ y el valor de result (13) en la consola




//10
function sumNums(num1, num2) {      //Define una función llamada sumNums que recibe dos parámetros llamados num1 y num2
    var sum = num1 + num2;          //Declara una variable local llamada sum y le asigna la suma de los valores de num1 y num2
    console.log('sum es', sum);     //Imprime ‘sum es’ y el valor de sum en la consola (5) (3) (6) (3) (5) (8)
    return sum;                     //Devuelve el valor de sum
}                                   //Cierra la definición de la función
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3)); //Declara una variable global llamada result y le asigna el valor de la suma de varias llamadas a la función sumNums con diferentes argumentos, algunos de los cuales son también llamadas a la función sumNums
console.log('el resultado es', result); // Imprime ‘el resultado es’ y el valor de result en la consola (19)

