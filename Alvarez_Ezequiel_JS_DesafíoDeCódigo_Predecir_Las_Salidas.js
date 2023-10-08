var arr = ["Up", "You", "Give", "To", "Going", "Never"]; //Declara una variable global llamada arr y le asigna un arreglo (array) con seis elementos que representan algunas palabras
for(var i = arr.length-1; i >= 0; i = i - 1) {           //Inicia un bucle for que recorre el arreglo arr desde el último elemento hasta el primero, decrementando la variable i en cada iteración
    console.log(arr[i]);                                 //Imprime el valor del elemento del arreglo arr en la posición i en la consola Never Going To Give You Up
}                                                        //Cierra la definición de la función


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];              //Declara una variable global llamada arr y le asigna un arreglo (array) con diez elementos que representan algunos números
var sum = 0;                                            //Declara una variable global llamada sum y le asigna el valor inicial cero
for(var i = 1; i < arr.length; i = i + 2) {             //Inicia un bucle for que recorre el arreglo arr desde el segundo elemento hasta el último, incrementando la variable i en dos unidades en cada iteración
    sum = sum + arr[i];                                 //Actualiza el valor de la variable sum sumándole el valor del elemento del arreglo arr en la posición i
    console.log(arr[i]);                                //Imprime el valor del elemento del arreglo arr en la posición i en la consola 2, 2, 4, 6, 6
    console.log(sum);                                   //Imprime el valor de la variable sum en la consola 12, 8, 20, 10, 30
}                                                       //Cierra la definición de la función


var arr = [8, 2, 0, 6, 12, 4, 3];                       //Declara una variable global llamada arr y le asigna un arreglo (array) con siete elementos que representan algunos números
for(var i = 0; i < arr.length; i++){                    //Inicia un bucle for que recorre el arreglo arr desde el primer elemento hasta el último, incrementando la variable i en una unidad en cada iteración
    if(arr[i] >= 6) {                                   //Evalúa una condición que compara el valor del elemento del arreglo arr en la posición i con el número 6
        console.log(true);                              //Si la condición se cumple, es decir, si el valor del elemento del arreglo arr en la posición i es mayor o igual que 6, imprime true en la consola
    }                                                   //La definición del if
}                                                       //Cierra la definición de la función 
                                                        
