
var logout = document.getElementById("logout")

    logout.click(function (event) {
        alert("Are you sure you want to Logout?");
        sessionStorage.removeItem("user");
        sessionStorage.clear();
        window.location.href = "./index.html";  
    })
