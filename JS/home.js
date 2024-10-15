import { getInputFieldValueById } from './utils.js';
import { getTextFieldValueById } from './utils.js';

document.getElementById('donateBoxBtn1')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxOneValue = getInputFieldValueById('donateBox1');
     let balance = getTextFieldValueById('Balance');
     let campOneCollection = getTextFieldValueById('campOneCollection');
     let TotalCampOneCollection = campOneCollection += donateBoxOneValue;
     let newBalance = balance -= donateBoxOneValue;
    document.getElementById('campOneCollection').innerText = TotalCampOneCollection;
    document.getElementById('Balance').innerText = newBalance;

     console.log(TotalCampOneCollection);
})



