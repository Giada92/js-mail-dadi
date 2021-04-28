/* 1 - Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

//chiedere all'utente la mail
var mailUtente = prompt("Inserisci qui la tua email!");
console.log(mailUtente);


//creare array di mail
var mailLista = [ "giada@virgilio.it", "francesco@gmail.com", "lorenzo.88@gmail.com", "paolo@libero.it", "antonio@gmail.com", "aimone@virgilio.it"];
console.log(mailLista);
console.log(mailLista[1]);

/* mailLista.push("vale99@gmail.com");
console.log(mailLista); */

//creare un ciclo dell'array e inserire all'interno un if

for (var i = 0; i < mailLista.length; i++) {
    console.log(i);

    if (mailUtente == mailLista[i]) {
        console.log(mailUtente);
        console.log(mailLista[i]);
        var messaggio = "Sei nella lista";
        //console.log("Primo " + messaggio);
    }  else if (mailUtente != mailLista[i]) {
        var messaggio = "Non sei sulla lista";
        //console.log("Secondo " + messaggio);
    }
}
console.log("fuori dal ciclo " + i);

console.log(messaggio);
