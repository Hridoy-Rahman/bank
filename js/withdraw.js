document.getElementById('btn-withdraw').addEventListener('click',function(){

    const newWithdrawAmount=getInputElementById('withdraw-input');
    const previousWithdrawAmount=getElementValueById('total-withdraw');
    const previousTotalBalance=getElementValueById('total-balance') ;

    if(previousTotalBalance<newWithdrawAmount){
        alert("Insufficient Balance");
        return;
    }

    const currentTotalWithdraw=previousWithdrawAmount+newWithdrawAmount;

    const totalBalance=previousTotalBalance-newWithdrawAmount;

    setTextValueById('total-withdraw',currentTotalWithdraw);
    setTextValueById('total-balance',totalBalance);
});