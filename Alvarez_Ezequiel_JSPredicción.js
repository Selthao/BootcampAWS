//Esta función imprimirá en pantalla el mensaje "Nací en1980"
function myBirthYearFunc(){
        console.log("Nací en" + 1980);
    }
    
//La segunda función también imprimirá en pantalla el mensaje "Nací en1980" ya que la variable birthYearInput tiene asignado el valor 1980.
function myBirthYearFunc(birthYearInput){
        console.log("Nací en" + birthYearInput);
    }
    

//La tercera y última función imprimirá en pantalla "¡Sumando números! num1 es: 10 num2 es: 20 30"
function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 es: " + num1);
    console.log("num2 es: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}    
    
   