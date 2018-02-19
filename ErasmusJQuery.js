$(document).ready(function(){

    $(".fa-search").click(function(){
        $(".container, .input").toggleClass("active");
        $(".input").focus();
    });
})