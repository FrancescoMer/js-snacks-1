let somma = 0;

for (let i = 1; i <= 10; i++) {
  const numero = parseFloat(prompt(`Inserisci il numero ${i} :`));
  somma += numero;
}

console.log("La somma dei numeri inseriti è:", somma);