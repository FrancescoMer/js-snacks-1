const parola1 = prompt("Inserisci la prima parola:");
const parola2 = prompt("Inserisci la seconda parola:");


if (parola1.length < parola2.length) {
  console.log(parola1);
  console.log(parola2);
} else if (parola2.length < parola1.length) {
  console.log(parola2);
  console.log(parola1);
} else {
 
  console.log(parola1);
  console.log(parola2);
}