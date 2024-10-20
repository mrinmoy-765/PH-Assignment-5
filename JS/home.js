import { closePopup, getInputFieldValueById, openPopup, showSectionById } from './utils.js';
import { getTextFieldValueById } from './utils.js';

document.getElementById('donateBoxBtn1')
    .addEventListener(`click`, function(event){
        event.preventDefault();

        let donateBoxOneValue = getInputFieldValueById('donateBox1');
        let balance = getTextFieldValueById('Balance');

         // Check if the value is empty or NaN
        if (!donateBoxOneValue || isNaN(donateBoxOneValue)) {
            alert('Please enter a valid number');
            document.getElementById('donateBox1').value = "";  // Clear input field
             return;
        }

        if(donateBoxOneValue <= balance){
            let campOneCollection = getTextFieldValueById('campOneCollection');
            let TotalCampOneCollection = campOneCollection += donateBoxOneValue;
            let newBalance = balance -= donateBoxOneValue;
            document.getElementById('campOneCollection').innerText = TotalCampOneCollection;
            document.getElementById('Balance').innerText = newBalance;
            document.getElementById('donateBox1').value = "";  
            openPopup();  

            // Add transaction history
            const date = new Date();
            const div = document.createElement('div');
            div.classList.add('border', 'border-black', 'p-4', 'rounded-md', 'mb-4');
            div.innerHTML = `
                <h4 class="font-bold text-lg">${donateBoxOneValue} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
                <p>${date}</p>
            `;

            document.getElementById('history').appendChild(div);

        } else {
            alert("Insufficient Balance!!!");
        }
    });



document.getElementById('donateBoxBtn2')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxTwoValue = getInputFieldValueById('donateBox2');
     let balance = getTextFieldValueById('Balance');

       // Check if the value is empty or NaN
        if (!donateBoxOneValue || isNaN(donateBoxTwoValue)) {
            alert('Please enter a valid number');
            document.getElementById('donateBox2').value = "";  // Clear input field
             return;
        }


    if(donateBoxTwoValue <= balance){
        let campTwoCollection = getTextFieldValueById('campTwoCollection');
        let TotalCampTwoCollection = campTwoCollection += donateBoxTwoValue;
        let newBalance = balance -= donateBoxTwoValue;
        document.getElementById('campTwoCollection').innerText = TotalCampTwoCollection;
        document.getElementById('Balance').innerText = newBalance;
        document.getElementById('donateBox2').value = "";
        const date = new Date();
        openPopup();  

        //add transaction history
        const div = document.createElement('div');
        div.classList.add( 'border', 'border-black', 'p-4', 'rounded-md', 'mb-4');
        div.innerHTML = `
        <h4 class="font-bold text-lg">${donateBoxTwoValue} Taka is Donated for  Flood Relief in Feni,Bangladesh</h4>
        <p>${date}</p>
        `;

         document.getElementById('history').appendChild(div);
    }else{
        alert("Insufficent Balance!!!");
    }
  
})

document.getElementById('donateBoxBtn3')
.addEventListener(`click`, function(event){
    event.preventDefault();

     const donateBoxThreeValue = getInputFieldValueById('donateBox3');
     let balance = getTextFieldValueById('Balance');

       // Check if the value is empty or NaN
        if (!donateBoxOneValue || isNaN(donateBoxThreeValue)) {
            alert('Please enter a valid number');
            document.getElementById('donateBox3').value = "";  // Clear input field
             return;
        }
   
     if(donateBoxThreeValue <= balance){
        let campThreeCollection = getTextFieldValueById('campThreeCollection');
        let TotalCampThreeCollection = campThreeCollection += donateBoxThreeValue;
        let newBalance = balance -= donateBoxThreeValue;
        document.getElementById('campThreeCollection').innerText = TotalCampThreeCollection;
        document.getElementById('Balance').innerText = newBalance;
        document.getElementById('donateBox3').value = "";
        const date = new Date();
        openPopup();  
         //add transaction history
        const div = document.createElement('div');
        div.classList.add( 'border', 'border-black', 'p-4', 'rounded-md', 'mb-4');
        div.innerHTML = `
        <h4 class="font-bold text-lg">${donateBoxThreeValue} Taka is Donated for Injured in the Quota Movement</h4>
        <p>${date}</p>
        `;

         document.getElementById('history').appendChild(div);
       
     }
     else{
        alert("Insufficent Balance!!!");
     }
   
})

document.getElementById('show-history')
.addEventListener('click', function() {
    showSectionById('history');
    this.style.backgroundColor = 'lightgreen';
    document.getElementById('show-donation').style.backgroundColor = '';
});

document.getElementById('show-donation')
.addEventListener('click', function() {
    showSectionById('donation');
    this.style.backgroundColor = 'lightgreen';
    document.getElementById('show-history').style.backgroundColor = '';
});














                
            
 

