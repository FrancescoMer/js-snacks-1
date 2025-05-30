const numero1 = parseFloat(prompt("Inserisci il primo numero:"));
const numero2 = parseFloat(prompt("Inserisci il secondo numero:"));


if (numero1 > numero2) {
  console.log("Il numero maggiore è: " + numero1);
} else if (numero2 > numero1) {
  console.log("Il numero maggiore è: " + numero2);
} else {
  console.log("I due numeri sono uguali.");
}
