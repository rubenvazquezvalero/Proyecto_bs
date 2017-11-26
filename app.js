function historia(){
	document.getElementById("historia").style.display = "block";
	document.getElementById("inicio").style.display = "none";
}

function inicio(){
	document.getElementById("historia").style.display = "none";
	document.getElementById("inicio").style.display = "block";
}

function switchPag(){
	var x = document.getElementById("historia").value;
	switch (x) {
		case "inicio":
			document.getElementById("historia").style.display = "none";
			document.getElementById("inicio").style.display = "block";
			break;
		case "historia":
			document.getElementById("historia").style.display = "block";
			document.getElementById("inicio").style.display = "none";
	}
}