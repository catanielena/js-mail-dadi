// Lista mail
var mailList = ["martamodonesi@gmail.com", "biagiomoro85@gmail.com", "gaiavittoria.milanese@gmail.com", "lofarosalvatoreemanuele@gmail.com"];
// Richiesta mail
var mailRequest = prompt("Inserisci la tua mail", "@gmail.com");
// Verifica che la mail inserita sia nella lista
var login = 0;
for (i = 0; i < mailList.length; i++) {
    if (mailRequest == mailList[i]) {
        login = 1;
        alert("Accedi");
    } 
}

if (login == 0) {
    alert("Register");
}
