/*function transferHTM(dir='') {
		let mainDiv = document.querySelectorAll("div.WordSection1")[0];
	mainDiv.classList.add("main");
			
	//var elms = document.querySelectorAll("div[style='border:solid windowtext 1.0pt;padding:1.0pt 4.0pt 1.0pt 4.0pt']");
	var codeElms = document.querySelectorAll("div[style*='border:solid windowtext 1.0pt']");
	codeElms.forEach( (elem)=>{ // hilight codes		
		elem.style["background-color"] = "#FAFAFA";
	});
  
    let tables = document.querySelectorAll("table.MsoTableGrid"); // Ajust Table to Center
	tables.forEach( (t)=>{
			t.style["margin-left"] = "auto";
			t.style["margin-right"] = "auto";
		}
	)	
	
	var img = document.getElementsByName("img");
    alert(img)
	img.forEach( (elem)=>{ // hilight codes
		if (img.naturalWidth === 0) {
			img.src = `${dir}/img.src`;
		}		
		alert(elem.src)
	});
	
}*/

function modfiyHTM(content) {
	return content.replaceAll(/src="Chap/g, 'src="html_bookjs/Chap');
}
