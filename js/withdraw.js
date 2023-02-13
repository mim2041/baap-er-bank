document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const WithdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(WithdrawField.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawBalance = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = withdrawAmount + previousWithdrawBalance;
    console.log(newWithdrawTotal);
    WithdrawField.innerText = newWithdrawTotal;

    WithdrawField.value = '';
})