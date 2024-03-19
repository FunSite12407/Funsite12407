var loggedInUsers = [];
        // Array of user credentials
        var users = [
            { email: "admin@gmail.com", password: "admin123" },
            { email: "viyomjagtap1@gmail.com", password: "viyom@2611" },
            { email: "tejas@gmail.com", password: "user723" },
            { email: "mihir@gmail.com", password: "user734" },
            // Add more users below
            { email: "user3@gmail.com", password: "user799" },
            { email: "machhihimanshu049@gmail.com", password: "HEMANSHU01" },
            // Add as many users as needed
        ];
    
        function func(event) {
            event.preventDefault(); // Prevent default form submission behavior
    
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
    
            // Check if the entered email and password match any user
            var authenticatedUser = users.find(function(user) {
                return user.email === email && user.password === password;
            });
    
            if (authenticatedUser) {
                authenticatedUser.isLoggedIn = true;
                // Redirect to the content page
                window.location.href = "cont.html";
            } else {
                alert("Invalid email or password");
            }
        }

        document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};