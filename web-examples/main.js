/*$("button").on("click",function(){

    $(this).closest("li")
    .find("img")
    .clone().addclass("zoon")
    .appendTo("body");
     setTimeout (function(){
        $(".zoom").remove();
     },1000);
}) ;*/
$("button").on("click", function () {
    $(this).closest("li")
        .find("img")
        .clone().addClass("zoom") // Corrected method name
        .appendTo("body");
    
    setTimeout(function () {
        $(".zoom").remove(); // Corrected to match the added class name
    }, 1000);
});