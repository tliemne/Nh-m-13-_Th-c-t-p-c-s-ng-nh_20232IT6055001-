function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username.trim() === '' || password.trim() === '') {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Vui lòng điền đầy đủ thông tin.';
    return false;
  }

  return true;
}
