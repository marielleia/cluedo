# JS | Cluedo - Mezclando objetos y arrays

El clásico juego de detectives

Cluedo o Clue es un juego de mesa popular que fue producido originalmente por la empresa Parker Brothers y ha sido uno de los juegos favoritos de generaciones de familias. El objetivo del juego es resolver un caso de asesinato preguntando: ¿quién lo hizo? ¿Con qué arma? ¿En qué habitación? Luego, cada vez que haces una sugerencia en cuanto al posible sospechoso, arma y habitación, vas eliminando las posibilidades y acercándote cada vez más a la verdad.

![Clue Picture](https://i.imgur.com/AZWieq9.jpg)

## Requisitos

- Haz Fork del repositorio
- Clónalo en tú área de trabajo local
- Una vez resuelto:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```
- Haz Pull Request desde la master branch del repositorio con el nombre en la cabecera del mensaje.

## Ejercicio

Escribe el código JavaScript en el fichero `src/clue.js`.


## Iteración 1 - <small>Crear las cartas</small>

El Cluedo tiene tres tipos de cartas: *suspects*, *rooms*, and *weapons*. Los tres tipos de cartas siempre están separadas.

Para hacer esto, necesitarás conocer a los personajes (posibles asesinos), armas disponibles y habitaciones de la casa. Toda la información se encuentra disponible en el fichero `clue.js`.

### Personajes

Todos los personajes tienen nombre, apellido, trabajo, edad, descripción e imagen.

### Armas disponibles

Hay nueve armas.

### Habitaciones

El juego representa el plano de una mansión y describe 15  habitaciones diferentes.

### Estructura de los datos

Crea una estructura de datos para cada uno de los personajes, armas y habitaciones. Cada documento tendrá toda la información.

Después de crear esta estructura, crea un array para cada uno de los datos y sube cada documento a su array correspondiente.

Por ejemplo:

```javascript
let mrGreen = {
  // Properties
};

let rope = {
  // Properties
}

// etc
```
Tendrás tres arrays: `charactersArray`, `weaponsArray` y `roomsArray`.

## Iteración 2 - <small>Crea el misterio</small>

Al inicio del juego, los jugadores barajan los mazos de cartas para crear combinaciones de *suspect*, *weapon* y *room*. Este será el misterio a resolver.

### Los TESTS!

El ejercicio constará de un test que se correrá mediante el fichero `SpecRunner.html`.

### Random Selector

Crea un método `randomSelector` que seleccione de forma aleatoria un elemento del mazo de cartas. El método recibirá un `array` como argumento y devuelve un elemento random del array.

### Crea el misterio

Crea un método `pickMistery` que llamará a `randomSelector` por cada mazo de cartas y devolverá un array con tres cartas escogidas: un personaje, un arma y una habitación.

## Iteración 3 - <small>Descubrir el misterio</small>

Para revelar el misterio se ha de crear un método `revealMistery` que recibirá el array del misterio como argumento y lo devolverá revelado con este formato:

**\<FIRST NAME\> \<LAST NAME\> killed Mr.Boddy using the \<WEAPON\> in the \<PLACE\>!!!!**

## Extra Resources

- [20 Mind-blowing facts about Cluedo.](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Wikipedia](https://en.wikipedia.org/wiki/Cluedo)
- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)