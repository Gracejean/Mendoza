$(document).ready(function () {
    $("label").attr("required", true);
    $("#login").click(function () {
        let input = $("#email").val();
        let pass = $("#password").val()
        $("#password").attr({
            'pattern': '[A-Za-z]{8,}',
            'title': "This field is required"
        })
        if (input != "" && pass != "") {
            console.log($("#email").val());
            console.log($("#password").val())
            alert("You have successfully Logged in...!!!!!!");
            $("form")[0].reset();
        }
    });

    $("#register").click(function () {
        var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
        if ($("#firstname").val() == '' || $("#lastname") == '' || $("#signemail").val() == '' || $("#signpassword").val() == '' || $("#confirmpassword").val() == '') {
            alert("Please fill all fields...!!!!!!");
        } else if (!($("#signemail").val()) == email) {
            alert("Please enter valid Email...!!!!!!");
        } else {
            alert("You have successfully Sign Up, Now you can login...!!!!!!");
            $("#form").slideUp("slow", function () {
                $("#sign_up").slideDown("slow");


            });
        }
    })
    $("#signup").click(function () {
        $("#form").slideUp("slow", function () {
            $("#sign_up").slideDown("slow");
        });
    });

    $("#register").click(function () {
        $("#sign_up").slideUp("slow", function () {
            $("#form").slideDown("slow");
        });
    });
});