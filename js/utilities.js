
// deposite function

function getInputElementById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    if(isNaN(inputFieldValue)){
        alert("Please Enter number");
        return;
    }
    inputField.value='';
    return inputFieldValue;
    
}

// Balance Update Function
function getElementValueById(elementId){
    const textElementField=document.getElementById(elementId);
    const textElementFieldValueString=textElementField.innerText;
    const textElementFieldValue=parseFloat(textElementFieldValueString);
    return textElementFieldValue;
}

// Value setting function
function setTextValueById(elementId,newValue){
    const elementField=document.getElementById(elementId);
    elementField.innerText=newValue;
}
