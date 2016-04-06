$(document).ready(function(){
    $(".contact div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    $("#personal_info").click(function(){
        if ($(".contact div:visible").next().length != 0)
            $(".contact div:visible").fadeOut(function(){
                $(this).next().fadeIn();
            });
        else {
            $(".contact div:visible").fadeOut(function(){
                $(".contact div:first").fadeIn();
            });
        }
        return false;
    });
    $("#exprience_info").click(function(){
        if ($(".contact div:visible").prev().length != 0)
            $(".contact div:visible").fadeOut(function(){
                $(this).prev().fadeIn();
            });
        else {
            $(".contact div:visible").fadeOut(function(){
                $(".contact div:last").fadeIn();
            });
        }
        return false;
    });
});