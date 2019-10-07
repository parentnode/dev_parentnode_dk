window.onload = function() {
	console.log("Script loaded");

	var overlay = document.getElementById("overlay");
	var p = overlay.querySelector("p");

	u.e.drag(p, overlay, {"vertical_lock":true, "overflow":"scroll"});

	overlay.moved = function(e) {
		u.e.kill(e);
	}

	u.e.addMoveEvent(overlay, overlay.moved);


	p.moved = function(e) {
		console.log(this, e.type, "moved")
		u.e.kill(e);
	}

}

