$(document).ready(function() {
    
    var user = sessionStorage.getItem("user");
    console.log(user)
    console.log("i am here")
 
        var add = '<tr>';
        add += '<td> <b>Staff Id</b>: ' + user.staffId + '</td>';
        add += '<td> <b>Name</b>: ' + user.fullName + '</td>';
        add += '<td> <b>Email address</b>' + user.email + '</td>';
        add += '<td> <b>Department</b>' + user.dept + '</td>';
        add += '</tr>';
    
        $('body').append(add);
})