$(document).ready(function() {
  $('form#new-contact').submit(function(event){

    var inputtedFirstName = $("#new-firstname").val();
    var inputtedLastName = $("#new-lastname").val();
    var inputtedAddress = $("#new-address").val();

    var newContact = {
    firstname: inputtedFirstName,
    lastname: inputtedLastName,
    address: inputtedAddress
    }

    $("#second-column").show();

    $("#contacts").append("<li><span class='contacts'>"  + newContact.firstname  + " " + newContact.lastname + "</span></li>")
     $("#new-contact").find("input").val("");


    $(".contacts").last().click(function() {
        $("#third-column").show();
        $("#first-name").text(newContact.firstname);
        $("#last-name").text(newContact.lastname);
        $("#address").text(newContact.address);
    });
    event.preventDefault();
  });
});

