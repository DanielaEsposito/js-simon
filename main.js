//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//Potete usare liste, input e bottoni non stilizzati, mettendo stampe di debug in console e risultato finale in un alert.
//Solo una volta finito, a piacere e facoltativamente, potete aggiungete lo stile.
//NOTA:  non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
//BONUS
//Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
//Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

const generateNumeberImput=document.getElementById("generate-numbers");
const formInput=document.getElementById("input-form");
// numbers imput
const firstNumberImput = document.getElementById("first-number");
const secondtNumberImput = document.getElementById("second-number");
const thirdNumberImput = document.getElementById("third-number");
const fourthNumberImput = document.getElementById("fourth-number");
const fifthtNumberImput = document.getElementById("fifth-number");
//OUTPUT
const resultOutput =document.getElementById('output-result');

const randomNumbers=[];

for(let i =0;i < 5; i++){
    randomNumbers.push(Math.floor(Math.random() * (100-1+1)+ 1));   
}
generateNumeberImput.innerHTML=randomNumbers.join(" " + " ");
//console.log(randomNumbers);

setTimeout(()=>{
    formInput.classList.remove("d-none");
    generateNumeberImput.classList.add("d-none")
        
},30000);
 
formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const firstNumber=parseInt(firstNumberImput.value);
    const secondNumber=parseInt(secondtNumberImput.value);
    const thirdNumber=parseInt(thirdNumberImput.value);
    const fourthNumber=parseInt(fourthNumberImput.value);
    const fifthNumber=parseInt(fifthtNumberImput.value);
    const userNumbers=[];
    userNumbers.push(firstNumber,secondNumber,thirdNumber, fourthNumber, fifthNumber);
    //console.log(userNumbers);
})
    





 