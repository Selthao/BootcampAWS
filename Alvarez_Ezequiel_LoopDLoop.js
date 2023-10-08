/*¿Cómo sabemos que necesitamos un bucle aquí? Sabemos que necesitamos un bucle dado que tenemos una tarea que se tiene que repetir hasta que se cumpla determinada condición  

¿Cuál es el punto de partida del bucle? El punto de partida del bucle será 0 ya que la posición inicial del corredor será en la línea de partida 

¿Cuándo debe detenerse el bucle? el bucle debe detenerse cuando se alcance el kilómetro 10

¿Cómo sabrá parar? parará gracias a que la condición se habrá cumplido y los kilometros recorridos serán = 10 

¿Cuál es el incremento para cada iteración del bucle? de 1 dado que corresponde a 1 kilometro recorrido por el corredor

¿Qué variables necesitamos? necesitamos las variables */
      
      
      // Bloque de código principal

      let Kilometros = 0;
      while (Kilometros < 10) {
        if (Kilometros === 3 || Kilometros === 6 || Kilometros === 9) {
          console.log('El corredor a recorrido ' + Kilometros + ' kilometros y recibe un caramelo');
        } else {
          console.log('El corredor a recorrido ' + Kilometros + ' kilometros');
        }
        Kilometros++;
      }
        
    // Bloque de código Stretch 1
    
      let desplazamiento= 10
      let Kilometros = 0;
      while (Kilometros < 10) {
        if ((Kilometros === 3 || Kilometros === 6 || Kilometros === 9) && desplazamiento > 9) {
          console.log('El corredor a recorrido ' + Kilometros + ' kilometros y recibe un caramelo');
        } else {
          console.log('El corredor a recorrido ' + Kilometros + ' kilometros');
        }
        Kilometros++;
      }