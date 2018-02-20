$(document).ready(function(){

    $(".fa-search").click(function(){
        $(".container, .input").toggleClass("active");
        $(".input").focus();
    });
})

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").fadeIn("slow");
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").css("color", "red")
            .slideUp(2000)
            .slideDown(2000);
    });
});
