import { getInputFieldValueById, showSectionById } from './utils.js';
import { getTextFieldValueById } from './utils.js';

document.getElementById('donateBoxBtn1')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxOneValue = getInputFieldValueById('donateBox1');
     let balance = getTextFieldValueById('Balance');

       if(donateBoxOneValue <= balance){
         let campOneCollection = getTextFieldValueById('campOneCollection');
         let TotalCampOneCollection = campOneCollection += donateBoxOneValue;
         let newBalance = balance -= donateBoxOneValue;
         document.getElementById('campOneCollection').innerText = TotalCampOneCollection;
         document.getElementById('Balance').innerText = newBalance;
       }else{
        alert("Insufficent Balance!!!");

       }
     

})

document.getElementById('donateBoxBtn2')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxTwoValue = getInputFieldValueById('donateBox2');
     let balance = getTextFieldValueById('Balance');


    if(donateBoxTwoValue <= balance){
        let campTwoCollection = getTextFieldValueById('campTwoCollection');
        let TotalCampTwoCollection = campTwoCollection += donateBoxTwoValue;
        let newBalance = balance -= donateBoxTwoValue;
        document.getElementById('campTwoCollection').innerText = TotalCampTwoCollection;
        document.getElementById('Balance').innerText = newBalance;
    }else{
        alert("Insufficent Balance!!!");
    }
  
})

document.getElementById('donateBoxBtn3')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxThreeValue = getInputFieldValueById('donateBox3');
     let balance = getTextFieldValueById('Balance');
   
     if(donateBoxThreeValue <= balance){
        let campThreeCollection = getTextFieldValueById('campThreeCollection');
        let TotalCampThreeCollection = campThreeCollection += donateBoxThreeValue;
        let newBalance = balance -= donateBoxThreeValue;
        document.getElementById('campThreeCollection').innerText = TotalCampThreeCollection;
        document.getElementById('Balance').innerText = newBalance;
     }else{
        alert("Insufficent Balance!!!");
     }
   
})

document.getElementById('show-history')
.addEventListener('click', function() {
    // Show history section
    showSectionById('history');

    // Change the clicked button's background color to light green
    this.style.backgroundColor = 'lightgreen';

    // Reset the donation button to its original state (default style)
    document.getElementById('show-donation').style.backgroundColor = '';
});

document.getElementById('show-donation')
.addEventListener('click', function() {
    // Show donation section
    showSectionById('donation');

    // Change the clicked button's background color to light green
    this.style.backgroundColor = 'lightgreen';

    // Reset the history button to its original state (default style)
    document.getElementById('show-history').style.backgroundColor = '';
});




