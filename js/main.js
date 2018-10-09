$(function(){
    $(".menu").click(function(){
        var selectedMenu = $(this).attr("alt");
        menuChange(selectedMenu);
    });
    //heightFix("1");
});

//function heightFix(selectMenu)
//{
//    var height = 0;
//    switch (selectMenu)
//    {
//    case "1":
//        //height = $("#menu1").height();
//       height = 670 ;
//        break;
//    case "2":
//        height = $("#menu2").height();
//        break;
//    case "3":
//        height = $("#menu3").height();
//        break;
//    case "4":
//        height = $("#menu4").height();
//        break;
//    case "5":
//        height = $("#menu5").height();
//        break;
//    default:
//    }
//    $("#body-box").css({height : height+$("#content-block-header").height()+50+"px"});
//}
function menuChange(selectMenu)
{
    $(".content-box")
        .removeClass("visible").removeClass("relative")
        .addClass("invisible").addClass("absolute");

    switch (selectMenu)
    {
        case "1":
            $("#menu1").removeClass("invisible").removeClass("absolute")
                .addClass("visible").addClass("relative");
            break;
        case "2":
            $("#menu2").removeClass("invisible").removeClass("absolute")
                .addClass("visible").addClass("relative");
            break;
        case "3":
            $("#menu3").removeClass("invisible").removeClass("absolute")
                .addClass("visible").addClass("relative");
            break;
        case "4":
            $("#menu4").removeClass("invisible").removeClass("absolute")
                .addClass("visible").addClass("relative");
            break;
        case "5":
            $("#menu5").removeClass("invisible").removeClass("absolute")
                .addClass("visible").addClass("relative");
            break;
        default:
    }
    //heightFix(selectMenu);
}