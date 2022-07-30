const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit',function(e){
            e.preventDefault();
        });

function validate(){
    temp_user = document.getElementById('username').value;
    temp_pwd = document.getElementById('password').value;
    
    temp_dispresult = document.getElementById("disp_login_result");
    if(temp_user == "admin" && temp_pwd == "xav123")
        {
        temp_dispresult.className="input-success";
        temp_dispresult.innerHTML = "Success";
                
        }
    else{
        tmp_str='<i class="fa fa-thumbs-down" aria-hidden="true"></i>';
        document.getElementById("disp_login_result").className = "input-error";
        document.getElementById("disp_login_result").innerHTML="Login Failed, Try Again! <big>" + tmp_str + "</big>";
    }
    
}