// ejercicios

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var site = [".com .es .eu"];

// ciclo for para recorrer los valores del array en este caso 2
// para que pille de uno en uno
for (let i = 0; i < pronoun.length; i++) {
  // para que pille de uno en uno oojo cambiar siempre al nombre de su variable
  // indicamos con el let que son variables tanto a b c par que imprimia
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      // esta  formula es para que salga todo seguido y en orden + ""
      console.log(pronoun[i] + "" + adj[b] + "" + noun[c] + "" + site);
      document.body.innerHTML =
        pronoun[i] + "" + adj[b] + "" + noun[c] + "" + site;
    }
  }
}

// esto lo que hace es imprimir el texto en pantalla en el body
