var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm-password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = '* Passwords match';
      document.getElementById('password').style.borderColor = 'rgb(31, 228, 31)';
      document.getElementById('confirm-password').style.borderColor = 'rgb(31, 228, 31)';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = '* Passwords do not match';
      document.getElementById('password').style.borderColor = 'red';
      document.getElementById('confirm-password').style.borderColor = 'red';
    }
  }

