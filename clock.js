setInterval(sh,1000);

var H = document.getElementById('hours');
var M = document.getElementById('minute');
var S = document.getElementById('second');

function sh() 
{
	var show = new Date;
	var SH = show.getSeconds()/60;
	var SM = (SH+show.getMinutes())/60;
	var SS = (SM+show.getHours())/12;

	setrotation(H,SS);
	setrotation(M,SM);
	setrotation(S,SH);
}
function setrotation(element,aa)
{
	element.style.setProperty('--s',(aa*360));
}

