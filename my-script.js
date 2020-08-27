function chekFirstName(){
    var firstnamelen=$("#firstName").val().length;
    if(firstnamelen>=6 && firstnamelen<=15){
        $("#firstNameError").text("");
    }
    else{
        $("#firstNameError").text("please enter your name between 6 to 15 character");
    }
}

$("#firstName").click(function(){
    chekFirstName();
})
$("#firstName").blur(function(){
    chekFirstName();
})
$("#firstName").keyup(function(){
    chekFirstName();

})

// last name
function cheklastName(){
    var lastnamelen=$("#lastName").val().length;
    if(lastnamelen>=6 && lastnamelen<=15){
        $("#lastNameError").text("");
    }
    else{
        $("#lastNameError").text("please enter your name between 6 to 15 character");
    }
}

$("#lastName").click(function(){
    cheklastName();
})
$("#lastName").blur(function(){
    cheklastName();
})
$("#lastName").keyup(function(){
    cheklastName();

})
// check email
function checkEmail(){
    var pattern = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

if (pattern.test($('#inputEmail1').val()))
{
    $("#inputEmail1Error").text("");
}
else
{
    $("#inputEmail1Error").text('Invalid Email');
  
}
}

$("#inputEmail1").click(function(){
    checkEmail();
})
$("#inputEmail1").blur(function(){
    checkEmail();
})
$("#inputEmail1").keyup(function(){
    checkEmail();
})