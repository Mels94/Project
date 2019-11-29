$(document).ready(function(){
    // Toggle plus minus icon on show hide of collapse element
/*    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });*/



    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        console.log('test', $(this))

    }).on('hide.bs.collapse', function(){

        $(this).prev(".minus_plus").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});