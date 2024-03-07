let isLoggedIn = false;

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        isLoggedIn = true;
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
if (!isLoggedIn && window.location.pathname !== "/login.html") {
    window.location.href = "/login.html";
  }

document.getElementById("loginForm").addEventListener("submit", handleLogin);