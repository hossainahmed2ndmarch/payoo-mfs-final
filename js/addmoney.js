document.getElementById('add-money-btn')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const addMoney = getInputFieldById('input-add-money');
  const pinNumber = getInputFieldById('add-money-pin');
  if (pinNumber === 1234) {
   const mainBalance = getTextFieldById('main-balance');
   const newBalance = addMoney + mainBalance;

   document.getElementById('main-balance').innerText = newBalance;

   const div = document.createElement('div');
   div.classList.add('p-4', 'rounded-xl', 'border-[1px]', 'bg-white', 'border-[#0808081A]');
   div.innerHTML = `
    <div class="flex justify-between">
      <div class="rounded-full p-3 bg-[#0808080D]"></div>
      <div>
        <h5 class="text-base font-semibold text-[#080808B3]">Add Money: ${addMoney}</h5>
        <h5 class="text-base font-semibold text-[#080808B3]">New Balance: ${newBalance}</h5>
      </div>
    </div>
   `;

   document.getElementById('transaction-container').appendChild(div);
  }
  else {
   alert('Failed to add money!Please try again later.');
  }
 })