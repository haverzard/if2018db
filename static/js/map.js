h = window.innerHeight;
w = window.innerWidth;

sc = 1;

if (h > w) { sc=2; };
if (location.pathname == "/") {
	document.getElementById("container2").style.width = w*0.5*sc + "px";
	document.getElementById("container2").style.height = w*0.25 + "px";
	document.getElementById("container2").style.top = (h-w*0.25)/2 + "px";
	document.getElementById("container2").style.left = w*0.25 + "px";
	document.getElementById("container_text").style.top = w*(0.25 - 0.035*sc**2*document.getElementsByClassName("title").length - 0.025*sc**2*document.getElementsByClassName("text").length)/2 + "px";
} else {
	for (i = 0; i < document.getElementsByClassName("name_container").length; i++) {
		document.getElementsByClassName("name_container")[i].style.width = w*0.9*0.3 + "px";
	}
	for (i = 0; i < document.getElementsByClassName("footer_text").length; i++) {
		document.getElementsByClassName("footer_text")[i].style.fontSize = w*0.01 + "px";
	}
	document.getElementById("footer_box").style.top = w*(0.05-0.01*document.getElementsByClassName("footer_text").length)/2 + "px";
	document.getElementById("container").style.width = w*0.8 + "px";
	document.getElementById("container").style.top = w*0.05 + "px";
	document.getElementsByClassName("content")[0].style.margin = w*0.8*0.05 + "px";
	document.getElementsByClassName("content")[1].style.margin = w*0.8*0.05 + "px";
	document.getElementById("footer").style.height = w*0.05 + "px";
	if (h > w) {
		document.getElementsByClassName("content")[0].remove();
	} else {
		document.getElementsByClassName("content")[1].remove();
	}
	if (document.body.clientHeight < (h+w*0.05)) {
		document.getElementById("space").style.height = h+w*0.05-document.body.clientHeight + "px";
	} else {
		document.getElementById("space").style.height = w*0.1 + "px";
	}
}

for (i = 0; i < document.getElementsByClassName("title").length; i++) {
	document.getElementsByClassName("title")[i].style.fontSize = w*0.02*sc**2 + "px";
	document.getElementsByClassName("title")[i].style.lineHeight = w*0.035*sc**2 + "px";
}

for (i = 0; i < document.getElementsByClassName("text").length; i++) {
	document.getElementsByClassName("text")[i].style.fontSize = w*0.012*sc**2 + "px";
	document.getElementsByClassName("text")[i].style.lineHeight = w*0.025*sc**2 + "px";
}

document.getElementById("menu").style.height = w/20*sc**2 + "px";

for (i = 0; i < document.getElementsByClassName("menu_box").length; i++) {
	document.getElementsByClassName("menu_box")[i].style.width = w/6*sc + "px";
	document.getElementsByClassName("menu_box")[i].style.fontSize = w*0.02*sc + "px";
}