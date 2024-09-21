document.getElementById('cash-out-btn')
 .addEventListener('click', function (event) {
  event.preventDefault();

  const cashOutMoney = getInputFieldById('input-cash-out-money');
  const cashOutPin = getInputFieldById('cash-out-pin');
  if (cashOutPin === 1234) {
   const mainBalance = getTextFieldById('main-balance');
   if (cashOutMoney <= mainBalance) {
    const remainingBalance = mainBalance - cashOutMoney;
    document.getElementById('main-balance').innerText = remainingBalance;
   }
   else {
    alert('You have insufficient balance.');
   }
  }
  else {
   alert('Failed to withdraw!Please try again later.');
  }
 })