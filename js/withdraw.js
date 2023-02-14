document.getElementById('btn-Withdraw').addEventListener('click',function(){
    console.log('clicked')
    const WithdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(WithdrawField.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawBalance = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = withdrawAmount + previousWithdrawBalance;
    withdrawTotal.innerText = newWithdrawTotal;

    WithdrawField.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseInt(balanceTotal.innerText);

    const newBalanceTotal = previousBalance - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})