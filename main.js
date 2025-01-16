//Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


//let parola = prompt("insrisci una parola").toLowerCase();
//let parolaInversa = ""

//function invertiLettere(){
   

//    for(let i = parola.length - 1;i >= 0; 1--){
    
//    parolaInversa += parola.charAt(i)
    
//      if(parola=== parolaInversa){
//          console.log("la tua parola è palindroma");
        
//      }
 //     else{
//        console.log("la tua parola non é palindroma");
        
 //      }
 //   }


//}

//Pari e Dispari L’utente sceglie pari o dispari e inserisce un 
//numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) 
//per il computer (usando una funzione). 
//Sommiamo i due numeri Stabiliamo se la somma dei due
// numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
function botN (min,max){
  let casuale = Math.floor(Math.random()* max)+ min;
  return random

}

function vincitore (x){
  if(x % 2 === 0 && pariO === "pari"){
    dispariOPari= "pari"
    return console.log("il numero è pari");
    
  }
  else{
    dispariOPari= "dispari"
    return console.log("il numero è dispari");
    
  }
}

let pariO =prompt ("scegli tra pari o dispari").toLowerCase()
let numero =parseInt(prompt ("scegli un numero da uno a cinque"))
let numeroBot = botN(1, 5) 
let somma = numero + numeroBot 
let dispariOPari = ""

vincitore(somma)

if(numero === dispariOpari){
  console.log("hai vinto!!!!!!!!!!!");
  
}
else{
  console.log("mi dispiace hai perso, ritenta sarai più fortunato ;)//");
  
}