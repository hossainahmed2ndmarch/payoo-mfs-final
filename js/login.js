document.getElementById('login-btn')
 .addEventListener('click', function (event) {
  event.preventDefault();
  const mblInput = document.getElementById('mbl-nmbr-input').value;
  const pin = document.getElementById('input-pin').value;
  if (mblInput === '4' && pin === '1234') {
   console.log('You are logged in.');
   window.location.href = '/home.html';
  }
  else{
   console.log('Incorrect phone number or pin.');
  }

  console.log(mblInput, pin);
 })