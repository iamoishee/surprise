// DOM manipulation
//console.log(document.getElementById("title"));

//onsole.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",
	function(event){

	function sayHello(){
		console.log(event);
	this.textContent="said it";
	var name=
		document.getElementById("name").value;
		var message= "<h2>So you are " + name +":-) !</h2>";

		document
		.getElementById("content")
		.innerHTML=message;

		if(name === "parikshit"||name === "Parikshit"||name === "Parikshit Singh"||name === "parikshit singh"){
			var title=
			document
			.querySelector("#title")
			.textContent;
			title += " That 5 more days are left for your birthdays yipeeee....";

			document
			.querySelector("h1")
			.textContent=title;
		}
		else{
			var title=
			document
			.querySelector("#title")
			.textContent;
			title += " No you are not Pagh :(";

			document
			.querySelector("h1")
			.textContent=title;

		}
}

//unobstructive event handler

//document.querySelector("button")
//	.addEventListener("click",sayHello);

document.querySelector("button")
   .onclick=sayHello
	}
);

