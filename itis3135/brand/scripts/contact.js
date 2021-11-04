$(document).ready(function(){
    $("#submitBtn").click(function(evt){
        //Get data from input.
        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();

        console.log("Clicked!")
        console.log(name); 
        console.log(phone); 
        console.log(email); 

        var msg = "Contact Info: " + "<br/><br/>Name:" + name + "<br/>Phone:" + phone + "<br/>Email:" + email;
        $("#contact-output").html(msg);

    });
});