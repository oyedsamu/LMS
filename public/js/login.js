$(document).ready(() => {
  var submit = $("#submit");

  submit.click(function (e) {
    e.preventDefault();
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    if (!email || !password){
      alert("Please enter your login credentials");
    }
    //console.log(pass)

    $.ajax({
      url: "http://localhost:3000/staffs",
      type: 'GET',
      // dataType: 'json',
      error: function () {
        alert('Something went wrong!');
      },
      success: function (data) {
        console.log('done');
        data.map(staffdata => {
          if (staffdata.email === email && staffdata.password == password) {
            if (staffdata.id != 10) {
              localStorage.setItem("user", JSON.stringify(staffdata));
              window.location.href = "./staff/home.html";
            } else {
              localStorage.setItem("user", JSON.stringify(staffdata));
              window.location.href = "./management/home.html";
            }
          }
        });
        $("#message").html("Username or Password incorrect");
      }
    });
  });
});