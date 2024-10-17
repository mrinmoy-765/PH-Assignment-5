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

    // console.log(TotalCampOneCollection);
})

document.getElementById('donateBoxBtn2')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxTwoValue = getInputFieldValueById('donateBox2');
     let balance = getTextFieldValueById('Balance');
     let campTwoCollection = getTextFieldValueById('campTwoCollection');
     let TotalCampTwoCollection = campTwoCollection += donateBoxTwoValue;
     let newBalance = balance -= donateBoxTwoValue;
    document.getElementById('campTwoCollection').innerText = TotalCampTwoCollection;
    document.getElementById('Balance').innerText = newBalance;

    // console.log(TotalCampOneCollection);
})

document.getElementById('donateBoxBtn3')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxThreeValue = getInputFieldValueById('donateBox3');
     let balance = getTextFieldValueById('Balance');
     let campThreeCollection = getTextFieldValueById('campThreeCollection');
     let TotalCampThreeCollection = campThreeCollection += donateBoxThreeValue;
     let newBalance = balance -= donateBoxThreeValue;
    document.getElementById('campThreeCollection').innerText = TotalCampThreeCollection;
    document.getElementById('Balance').innerText = newBalance;

    // console.log(TotalCampOneCollection);
})




