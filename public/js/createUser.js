
$(document).ready(function () {

  //window.location.href = "login.html";

  var submit = $("#submit");




  submit.click(function (e) {
    e.preventDefault();
    var staffId = $("#staffId").val();
    var fullName= $("#fullName").val();
    var email = $("#email").val();
    var password = $("#password").val()
    var dept = $("#dept").val();

    $.ajax({
      url:"http://localhost:3000/staffs",
      type: 'POST',
      dataType: 'json',
      data:{
          "staffId": staffId,
          "fullName": fullName,
          "email": email,
          "password": password,
          "dept": dept
        },
      error: function() {
      alert('error')
      },
      success: function(data) {
        alert(fName +"New Staff Created!")
        window.location.href = "/public/management/home.html";
      }
      });
  });
});