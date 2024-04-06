function kiemtra(){
    var ten = document.getElementById("ten").value;
    var gmail = document.getElementById("gmail").value;
    var mk = document.getElementById("mk").value;
    var mk0  = document.getElementById("mk0").value;
    var kt = 0;
    if(ten =="" || gmail == "" || mk =="" || mk0 == ""){
        kt = 1;
    }
    if(mk != mk0){
        kt =1;
    } 
    if(kt ==1){
        alert("Đăng kí thất bại. Vui lòng thử lại")
    }
    else{
        alert("Đăng ký thành công. Giờ bạn có thể đăng nhập")
    }
}