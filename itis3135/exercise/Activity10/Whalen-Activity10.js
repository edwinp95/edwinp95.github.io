$(document).ready(function() {
    // preload the image for each link
    $("#image_list a").each(function() {
            var swappedImage = new Image();
            swappedImage.src = $(this).attr("href");
    });
                
    // set up the event handlers for each link
    $("#image_list a").click(function(evt){

        //When clicked.. $(this)... is the clicked image
		var imageURL = $(this).attr("href");	
    	var caption = $(this).attr("title");
		
		//Fade out original
		$("#image, #caption").fadeOut(3000, 	
			function(){
				$("#image").attr("src", imageURL).fadeIn(3000);
				$("#caption").text(caption).fadeIn(3000);
				$("#caption").animate({fontSize: "2em"}, 3000);
		});
		
    	// cancel the default action of each link
    	evt.preventDefault();
    });

    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready