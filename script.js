let isLoggedIn = false;

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
    isLoggedIn = true;
    redirectToIndex();
  } else {
    alert("Invalid username or password. Please try again.");
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