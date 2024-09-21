document.getElementById('add-money-btn')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const addMoney = getInputFieldById('input-add-money');
  const pinNumber = getInputFieldById('add-money-pin');
  if (pinNumber === 1234) {
   const mainBalance = getTextFieldById('main-balance');
   const newBalance = addMoney + mainBalance;

   document.getElementById('main-balance').innerText = newBalance;
  }
  else {
   alert('Failed to add money!Please try again later.');
  }
 })