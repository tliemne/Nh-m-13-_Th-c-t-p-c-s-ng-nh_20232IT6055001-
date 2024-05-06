function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Vui lòng điền vào tất cả các ô input.";
        return false; // Ngăn chặn form được gửi đi
    } else {
        errorMessage.textContent = ""; // Xóa thông báo lỗi nếu có
        return true; // Cho phép form được gửi đi
    }
}
