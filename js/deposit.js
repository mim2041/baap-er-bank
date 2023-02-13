document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotal.innerText);
    const newDeposit = depositAmount + previousDepositTotal;

    depositTotal.innerText = newDeposit;
    depositField.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseInt(balanceTotal.innerText);

    const currentBalanceTotal = previousBalance + depositAmount;
    balanceTotal.innerText = currentBalanceTotal;
});