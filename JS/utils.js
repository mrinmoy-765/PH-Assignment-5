export function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

export function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

export function showSectionById(id){
    //hide all section
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    //show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}




export function openPopup() {
    document.getElementById("popup").classList.add("open-popup");
    document.getElementById("popup").classList.remove("hidden");
}

export function closePopup(){
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("popup").classList.remove("open-popup");
}