jQuery(document).ready(listo);



function listo()
{

	jQuery(".hamb").click(function(e){
// deja de funcionar la accion por defecto que tiene a
//el e representa la accion
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");


		jQuery(".hamb i").toggleClass("fa-times");

		
	});

//para scroll href
	jQuery("header nav .container li a").click(function(){

		jQuery("header nav .container li").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");

		var dev = jQuery(this).attr("href");

		//alert(dev);

		jQuery("html,body").animate({
			"scrollTop": jQuery(dev).offset().top -76
		})
	})
}
