h = window.innerHeight;
w = window.innerWidth;
document.getElementById("menu").style.height = w/20 + "px";

for (i = 0; i < document.getElementsByClassName("title").length; i++) {
	document.getElementsByClassName("title")[i].style.fontSize = w*0.03 + "px";
}

for (i = 0; i < document.getElementsByClassName("text").length; i++) {
	document.getElementsByClassName("text")[i].style.fontSize = w*0.01 + "px";
}

for (i = 0; i < document.getElementsByClassName("menu_box").length; i++) {
	document.getElementsByClassName("menu_box")[i].style.width = w/6 + "px";
	document.getElementsByClassName("menu_box")[i].style.fontSize = w*0.015 + "px";
}

if (location.pathname == "/") {
	document.getElementById("container2").style.width = w*0.5 + "px";
	document.getElementById("container2").style.height = w*0.25 + "px";
	document.getElementById("container2").style.top = (h-w*0.25)/2 + "px";
	document.getElementById("container2").style.left = w*0.25 + "px";
} else {
	for (i = 0; i < document.getElementsByClassName("name_container").length; i++) {
		document.getElementsByClassName("name_container")[i].style.width = w*0.9*0.3 + "px";
	}
	for (i = 0; i < document.getElementsByClassName("footer_text").length; i++) {
		document.getElementsByClassName("footer_text")[i].style.fontSize = w*0.01 + "px";
	}
	document.getElementById("footer_box").style.top = w*(0.05-0.01*document.getElementsByClassName("footer_text").length)/2 + "px";
	document.getElementById("container").style.width = w*0.9 + "px";
	document.getElementById("container").style.top = w*0.05 + "px";
	document.getElementById("container").style.left = w*0.05 + "px";
	document.getElementsByClassName("content")[0].style.margin = w*0.9*0.05 + "px";
	document.getElementsByClassName("content")[1].style.margin = w*0.9*0.05 + "px";
	document.getElementById("footer").style.height = w*0.05 + "px";
	if (window.innerHeight > window.innerWidth) {
		document.getElementsByClassName("content")[0].remove();
	} else {
		document.getElementsByClassName("content")[1].remove();
	}
}