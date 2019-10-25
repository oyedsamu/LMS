// Our esteemed staff will first see their profiles as a function of the inherited user details
// Then via the navbar buttons, they can create, read, update and delete as desired and allowed.
// The application is seamless as it posts directly to the leaves side of the db.json
// Read or view leaves created by the user does so by checking for all leaves with a particular username.
// Delete or update works same way.
// Delete and update only works if the status is not yet approved.

$(document).ready(function () {

    var user = sessionStorage.getItem("user");
    console.log(user)
    console.log("i am here")

    var add = '<tr>';
    add += '<td>' + user.id + '</td>';
    add += '<td>' + user.first - name + '</td>';
    add += '<td>' + user.last - name + '</td>';
    add += '<td>' + user.username + '</td>';
    add += '<td>' + post.phone_number + '</td>';
    add += '</tr>';

    $('body').append(add);
})