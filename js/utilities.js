function getInputFieldById(id) {
 const inputValue = document.getElementById(id).value;
 const inputNumber = parseFloat(inputValue);
 return inputNumber;
}

function getTextFieldById(id) {
 const textValue = document.getElementById(id).innerText;
 const textNumber = parseFloat(textValue);
 return textNumber;
}

function showSectionById(id) {
 document.getElementById('add-money-form').classList.add('hidden');
 document.getElementById('cash-out-form').classList.add('hidden');
 // document.getElementById('transfer-money-form').classList.add('hidden');
 // document.getElementById('get-bonus-form').classList.add('hidden');
 // document.getElementById('pay-bill-form').classList.add('hidden');
 // document.getElementById('transactions-log').classList.add('hidden');

 document.getElementById(id).classList.remove('hidden');
}