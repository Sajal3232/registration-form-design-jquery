$("#firstName").click(function(){
    var firstnamelen=$(this).val().length;
    if(firstnamelen>=6 && firstnamelen<=15){
        $("#firstNameError").text("");
    }
    else{
        $("#firstNameError").text("please enter your name between 6 to 15 character");
    }
})
$("#firstName").blur(function(){
    var firstnamelen=$(this).val().length;
    if(firstnamelen>=6 && firstnamelen<=15){
        $("#firstNameError").text("");
    }
    else{
        $("#firstNameError").text("please enter your name between 6 to 15 character");
    }
})
$("#firstName").keyup(function(){
    var firstnamelen=$(this).val().length;
    if(firstnamelen>=6 && firstnamelen<=15){
        $("#firstNameError").text("");
    }
    else{
        $("#firstNameError").text("please enter your name between 6 to 15 character");
    }

})