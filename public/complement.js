
document
  .querySelector('.request-complement')
  .addEventListener('click', function() {
    fetch('/complement')
      .then(res => res.json())
      .then(data => {
	document.querySelector('.remark').innerText = data.complement;
      })
      .catch( e => { console.log(e); });
  });

document
  .querySelector('.request-insult')
  .addEventListener('click', function () {
    fetch('/insult')
      .then(res => res.json())
      .then(data => {
        document.querySelector('.remark').innerText = data.insult;
      })
      .catch( e => { console.log(e); });
  });
