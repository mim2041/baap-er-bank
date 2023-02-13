document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseInt(depositField.value);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = parseInt(depositTotal.innerText);
    const newDeposit = depositAmount + previousDepositTotal;

    depositTotal.innerText = newDeposit;
    depositField.value = '';
});