// Generare un numero random da 1 a 6 per il giocatore
var playerNumb = alert("Il tuo numero è " + (Math.floor(Math.random() * 6) +1));
// Generare un numero random da 1 a 6 per il computer
var cpuNumb = alert("Il numero della cpu è " + (Math.floor(Math.random() * 6) +1));
// Se il numero del giocatore è più alto del numero del computer inviare il messaggio "Hai vinto", altrimento "Hai perso"
if (playerNumb > cpuNumb) {
    alert("Hai vinto!");
} else if (cpuNumb > playerNumb) {
    alert("Hai perso! Ritenta");
} else {
    alert ("Pareggio!")
}
