 async function convert() {
  let amount = document.getElementById('amount').value;
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  let data = await res.json();
  let rate = data.rates[to];
  document.getElementById('result').innerText = `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`;
 }
