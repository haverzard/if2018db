h = screen.height;
w = screen.width;

sc = 1;
if (h > w) { sc=2; };


document.getElementById("menu").style.height = w/20*sc**2 + "px";

for (i = 0; i < document.getElementsByClassName("menu_box").length; i++) {
	document.getElementsByClassName("menu_box")[i].style.width = w/6*sc + "px";
	document.getElementsByClassName("menu_box")[i].style.fontSize = w*0.02*sc + "px";
}

document.getElementById("menu_body").style.display = "block";

function toggle(x) { document.getElementById(x).onmouseover = function(){ document.getElementById(x).style.backgroundColor = "#555555"; }; document.getElementById(x).onmouseleave = function(){ document.getElementById(x).style.backgroundColor = "#000000"; }; };

toggle("home");
toggle("all");
toggle("k1");
toggle("k2");
toggle("k3");
toggle("k4");
document.getElementById("home").onclick = function(){ location.assign("/"); };
document.getElementById("all").onclick = function(){ location.assign("/k/0"); };
document.getElementById("k1").onclick = function(){ location.assign("/k/1"); };
document.getElementById("k2").onclick = function(){ location.assign("/k/2"); };
document.getElementById("k3").onclick = function(){ location.assign("/k/3"); };
document.getElementById("k4").onclick = function(){ location.assign("/k/4"); };


if (location.pathname == "/") {
	document.getElementById("container2").style.width = w*0.5 + "px";
	if (h > w) {
		document.getElementById("container2").style.width = w*0.8 + "px";
	}
	document.getElementById("container2").style.height = w*0.25*sc + "px";
	document.getElementById("container2").style.top = (h-w*0.25*sc-w/20*sc**2)/2 + "px";
	document.getElementById("container_text").style.top = w*(0.25*sc - 0.035*sc**2*document.getElementsByClassName("title").length - 0.025*sc**2*document.getElementsByClassName("text").length)/2 + "px";
} else {
	for (i = 0; i < document.getElementsByClassName("name_container").length; i++) {
		document.getElementsByClassName("name_container")[i].style.width = w*0.9*0.3 + "px";
	}
	for (i = 0; i < document.getElementsByClassName("footer_text").length; i++) {
		document.getElementsByClassName("footer_text")[i].style.fontSize = w*0.01 + "px";
	}
	document.getElementById("footer_box").style.top = w*(0.05-0.01*document.getElementsByClassName("footer_text").length)/2 + "px";
	document.getElementById("container").style.top = w*0.05 + "px";
	document.getElementById("footer").style.height = w*0.05 + "px";
	if (h > w) {
		document.getElementById("container").style.width = w*0.9 + "px";
		document.getElementsByClassName("text")[0].innerHTML = document.getElementById("name_tab").innerHTML;
		document.getElementsByClassName("content")[0].style.margin = w*0.05 + "px";
	} else {
		document.getElementById("container").style.width = w*0.8 + "px";
		document.getElementsByClassName("content")[0].style.margin = w*0.8*0.05 + "px";
	}
	document.getElementById("main_frame").style.display = "block";
	if (document.body.clientHeight < (h+w*0.05)) {
		document.getElementById("space").style.height = h+w*0.05-document.body.clientHeight + "px";
	} else {
		document.getElementById("space").style.height = w*0.1 + "px";
	}
	document.getElementById("main_frame").style.display = "none";
}

for (i = 0; i < document.getElementsByClassName("title").length; i++) {
	document.getElementsByClassName("title")[i].style.fontSize = w*0.02*sc**2 + "px";
	document.getElementsByClassName("title")[i].style.lineHeight = w*0.035*sc**2 + "px";
}

for (i = 0; i < document.getElementsByClassName("text").length; i++) {
	document.getElementsByClassName("text")[i].style.fontSize = w*0.012*sc**2 + "px";
	document.getElementsByClassName("text")[i].style.lineHeight = w*0.025*sc**2 + "px";
}

document.getElementById("main_frame").style.display = "block";