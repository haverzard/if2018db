function toggle(x) { document.getElementById(x).onmouseover = function(){ document.getElementById(x).style.backgroundColor = "#555555"; }; document.getElementById(x).onmouseleave = function(){ document.getElementById(x).style.backgroundColor = "#000000"; }; };

toggle("home");
toggle("all");
toggle("k1");
toggle("k2");
toggle("k3");
document.getElementById("home").onclick = function(){ location.assign("/"); };
document.getElementById("all").onclick = function(){ location.assign("/k/0"); };
document.getElementById("k1").onclick = function(){ location.assign("/k/1"); };
document.getElementById("k2").onclick = function(){ location.assign("/k/2"); };
document.getElementById("k3").onclick = function(){ location.assign("/k/3"); };