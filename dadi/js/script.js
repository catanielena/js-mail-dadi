// Generare un numero random da 1 a 6 per il giocatore
var playerNumb = alert("Il tuo numero è " + (Math.floor(Math.random() * 100) +1));
// Generare un numero random da 1 a 6 per il computer
var pcNumb = alert("Il numero del computer è " + (Math.floor(Math.random() * 100) +1));
// Se il numero del giocatore è più alto del numero del computer inviare il messaggio "Hai vinto", altrimento "Hai perso"
if (playerNumb > pcNumb) {
    alert("Hai vinto!");
} else {
    alert("Hai perso! Ritenta");
}
