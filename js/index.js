console.log("Hello!");

var img = $('#home-image');

manageImage();
$(window).resize(manageImage);

function manageImage()
{     
    img.attr('width', 'auto');
    img.attr('height', $( window ).height()); 
    
    if(img.width() < $( window ).width())
    {        
        img.attr('width', $( window ).width());
        img.attr('height', 'auto');   
    }
}

$("#bot-page-down-arr").click(function(){$("#about").animatescroll();});
$("#bot-page-up-arr").click(function(){$("#home").animatescroll();});

$("#eduCoursesId").click(function(){$("#courses").animatescroll();});
$("#eduMaterialsId").click(function(){$("#material").animatescroll();});