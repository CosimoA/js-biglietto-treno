
/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

// Variabili Preimpostate

const prezzoKm = 0.21;

const valuta = "€";

let sconto =0;

let ragioneSconto = "Lo sapevi che: Se vai allo sportello informazioni puoi richiedere la tua tessera: Trenino Thomas. Grazie a questa tessera noi aquisiremo tutti i tuoi dati e tu in cambio avrai sconti fuffa tipo Black Friday!";


// Chiedere all'utente quanti anni ha
const etaUtente = parseInt(prompt("Quanti anni hai?"));

// Chiedere all'utente quanti chilometri vuole fare
const distanzaKm = parseInt(prompt("Quanti Km vuoi percorrere?"));

// trovare prezzo totale
const prezzoReale = distanzaKm * prezzoKm;

// applicare sconto età
if (etaUtente < 18) {
    sconto = ((prezzoReale * 20) / 100);
    ragioneSconto = "Hai ricevuto uno sconto del 20% poichè sei minorenne, Beata Gioventù!";
} else if (etaUtente > 64) {
    sconto = ((prezzoReale * 40) / 100);
    ragioneSconto = "Hai ricevuto uno sconto del 40% grazie al programma interno: Aiutiamo la seconda Gioventù!";
}

// output descrizione del prezzo
document.getElementById("descrizione").innerHTML = ragioneSconto;

// output prezzo i € con max 2 decimali
document.getElementById("risultato").innerHTML = valuta + (prezzoReale - sconto).toFixed(2);

// DEBUG
// console.log("Età Utente", etaUtente);
// console.log("Km percorsi", distanzaKm);
// console.log("Prezzo Totale", prezzoReale);
// console.log("Prezzo Scontato", (prezzoReale - sconto));
// DEBUG