// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//PSEUDO CODICE

/*
- Creo 5 numeri casuali e li inserisco in un arrey
- visualizzo i valori dell'arrey in pagina.
- dopo 30 secondi nascondo i valori 
  - creo un ciclo dove per 5 volte chiedo il primo numero e lo confronto con il valore      dell'arrey in posizione 0, poi chiedo il secondo numero e lo confronto con il valore dell'arrey in posizione 1 etc...
        -se il numero inserito dall'utente è uguale al valore dell'arrey dei numeri casuali lo inserisco in un nuovo arrey
 - alla fine del ciclo mostro i valori del nuovo arrey
*/

const eleOutput = document.getElementById("output");
const eleBtnStart = document.getElementById("btn-start");
const eleOutputEnd = document.getElementById("output-end");

const timer = 3000;
const minCasualNumber = 1;
const maxCasualNumber = 100;
const CASUAL_NUMBERS = 5;

const arrCasualNumbers = [];
const arrUserNums = [];



eleBtnStart.addEventListener('click', function () {

    // reset game
    const arrCasualNumbers = [];
    const arrUserNums = [];
    eleOutput.style.display = "block";
    eleOutputEnd.innerHTML = '';
    

    //ciclo per creare 5 numeri random e pusharli in un arrey
    for (let i = 0; i < CASUAL_NUMBERS; i++) {
        let casualNumber = Math.floor(Math.random() * (maxCasualNumber - minCasualNumber)) + minCasualNumber;

        arrCasualNumbers.push(casualNumber);
    
    }

    eleOutput.innerHTML = arrCasualNumbers //stampo i numeri dell'arrey


    setTimeout(gameSetup, timer);



    function gameSetup() {
        eleOutput.style.display = "none";
        let eleOutputGame = document.createElement("div");
        eleOutputGame.innerHTML = '';

        //ciclo per chiedere numero all'utente e, se il numero era presente nell'arrey dei numeri generati casualmente, lo salvo in un nuovo arrey
        for (let i = 0; i < CASUAL_NUMBERS; i++) {
            const userNum = parseInt(prompt('inserisci il numero che si trovava nella posizione:' + ' ' + (i + 1)));
        
            if (arrCasualNumbers[i] == userNum) {
                arrUserNums.push(userNum);
            }
        }
        
        //controllo se l'utente ne ha beccata almeno una
        if (arrUserNums.length == 0) {           
            eleOutputEnd.innerHTML = 'mmm.. perhaps alzheimer?'

        }else {
            eleOutputEnd.innerHTML = `Good job, u nailed ${arrUserNums.length} numbers! Here they are: ${arrUserNums}` 
        }
    }         
})