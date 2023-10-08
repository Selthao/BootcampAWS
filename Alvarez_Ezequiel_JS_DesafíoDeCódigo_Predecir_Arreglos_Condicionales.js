function displayContactInfo() {                                                             //Define una función llamada displayContactInfo que no recibe ningún parámetro
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345]; //Declara una variable local llamada auntContactInfo y le asigna un arreglo (array) con seis elementos
    console.log(auntContactInfo);                                                           //Imprime el valor de la variable auntContactInfo en la consola ([ 'Paula', 'Smith', '1234 Main Street', 'St. Louis', 'MO', 12345 ])
}                                                                                           //Cierra la definición de la función

function displayGrocerylist() {                     //Define una función llamada displayGrocerylist que no recibe ningún parámetro                      
    var produce = ["manzanas", "naranjas"];         //Declara una variable local llamada produce y le asigna un arreglo (array) con dos elementos que representan algunas frutas
    var frozen = ["brócoli", "helado"];             //Declara una variable local llamada frozen y le asigna un arreglo (array) con dos elementos que representan algunos alimentos congelados
    frozen.push("croquetas de papa");               //Usa el método push para agregar el elemento “croquetas de papa” al final del arreglo frozen
    console.log(frozen);                            //Imprime el valor de la variable frozen en la consola ([ 'brócoli', 'helado', 'croquetas de papa' ])
}                                                   //Cierra la definición de la función

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];  //Declara una variable global llamada movieLibrary y le asigna un arreglo (array) con tres elementos que representan algunos títulos de películas
movieLibrary.push("Zoro");                          //Usa el método push para agregar el elemento “Zoro” al final del arreglo movieLibrary
movieLibrary[1] = "Beetlejuice";                    //Usa el operador de indexación [] para reemplazar el elemento en la posición 1 del arreglo movieLibrary (que corresponde al segundo elemento) por el elemento “Beetlejuice”
console.log(movieLibrary);                          //Imprime el valor de la variable movieLibrary en la consola ([ 'Bambi', 'Beetlejuice', 'Toy Story', 'Zoro' ])



