function kiemtra(){
    var ten = document.getElementById("ten").value;
    var mk = document.getElementById("mk").value;
    var two = "Không được bỏ trống"
    
    if(ten === "" || mk === ""){

        // alert("Không được bỏ trống.")
        document.getElementById("two").innerHTML = two;
    }
    else{
        alert("Đăng nhập thành công.")
    }
    
}