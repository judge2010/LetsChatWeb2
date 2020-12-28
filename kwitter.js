function login(){
    var user_name = document.getElementById("login").value;
    localStorage.setItem("username",user_name);
    window.location = "Let'sCW.html";
  }