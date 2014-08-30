console.log("Hello!");

var img = $('#home-image');

manageImage();
$(window).resize(manageImage);
$(window).click(function(){
	$("#sidebar-fixed").toggle(1000);
});

function manageImage()
{     
    img.attr('width', 'auto');
    img.attr('height', $( window ).height()); 
    
    if(img.width() < $( window ).width())
    {        
        img.attr('width', $( window ).width());
        img.attr('height', 'auto');   
    }
    
    //manage height of sidebar on mobile devices
    if($(window).width() < 768){
    	console.log("hello");
    	$("#sidebar-fixed").css("top", $(window).height()/4);
    }
}

$("#bot-page-down-arr").click(function(){$("#about").animatescroll();});
$("#bot-page-up-arr").click(function(){$("#home").animatescroll();});

$("#eduCoursesId").click(function(){$("#courses").animatescroll();});
$("#eduMaterialsId").click(function(){$("#material").animatescroll();});