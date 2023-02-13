
document.getElementById('btn-deposite').addEventListener('click',function(){
    // getting deposite input
    const newDepositeAmount=getInputElementById('deposite-input');

    // Getting previous deposite amount
    const previousDepositeAmount=getElementValueById('total-deposite');
    const previousTotalBalance=getElementValueById('total-balance');

    // Calculating Balance 
    const currentTotalDeposite=newDepositeAmount + previousDepositeAmount;
    const totalBalance=previousTotalBalance+newDepositeAmount;

    // Set the value
    setTextValueById('total-deposite',currentTotalDeposite);
    setTextValueById('total-balance',totalBalance);

  
});