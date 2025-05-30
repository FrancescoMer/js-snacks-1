const numeriDispari = []; 

for (let i = 1; i <= 6; i++) {
  let input;
  let numero;

  {
    input = prompt("Inserisci il numero ");
    numero = parseInt(input); 
  } 

  if (numero % 2 !== 0) {
    numeriDispari.push(numero); 
}
}
console.log("Numeri dispari inseriti:", numeriDispari);
