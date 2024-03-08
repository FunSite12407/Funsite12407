let isLoggedIn = false;

function handleLogin(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if(email == "admin@gmail.com" && password == "user")
{
    window.location.replace("index.html");     

}
else {
   alert("Invalid information");
    return ;
}
}

function redirectToLogin() {
  document.getElementById("indexPage").classList.add("hidden");
  document.getElementById("restrictedPage").classList.remove("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function redirectToIndex() {
  window.location.href = "index.html";
}

if (window.location.pathname !== "index.html" && !isLoggedIn) {
  redirectToLogin();
}