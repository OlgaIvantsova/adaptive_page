$(document).ready(function () {
  showMenu();
});

function showMenu() {
	var menu = $("#menu");
	$("#touchmenu").on("click", function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function() {
		var wid = $(window).width();
		if (wid>980&&menu.is(":hidden")) {
			menu.removeAttr("style");
		};
	});
}	