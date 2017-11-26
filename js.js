function deslizar(){
	var ti = 0;
	var tf = 600;
	var i = 0;
	for (; ti < tf; ti++){
		console.log(new Date().getTime());
		if(ti%2==0){
			i--;
			document.getElementById("menup").style.transform = "translate("+i+"px, 0)";
		}
	}
}

function mostrar(){
	document.getElementById("menup").style.display = "block";
	/* document.getElementById("menup").style.transform = "translate(-300px, 0)"; */
	deslizar();
	
}

function nomostrar(){
	document.getElementById("menup").style.display = "none";
	document.getElementById("menup").style.transform = "translate(0, 0)";
}
