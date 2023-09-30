	const __STORY__ = "js";
	const __MENU__ =  1;
	
	let targetDiv = document.getElementById("main");
	let statusLoading = document.getElementById("statusLoading");	
	let bottomAds = document.getElementById("bottom-ads");
	let rightAds = document.getElementById("right-ads"); 
	let headlineDiv = document.getElementById("headline");
	let mainMenu = document.getElementById("main-menu");	
		
	document.getElementById("btn-menu").onclick= function() {		
		mainMenu.style.display = "block";			
	}
	
	function isDesktop(){			
		let test = window.location.href.includes("localhost") ? window.innerWidth >=768 
		: WURFL.form_factor === "Desktop";

		if( test ) {	
			return true;				
		} 
		return false;		
	}

	function clickMenu(event) {		
				if( !isDesktop()) {					
					mainMenu.style.display = "none";	
				}				
				event.preventDefault();	
				let link = event.target				
				includeHTML(link);				
	}
    function initMenuEvent(func){
		let allLink = document.getElementsByClassName("link-chap");
		for(const link of allLink) {
			link.addEventListener('click', clickMenu);		
			link.addEventListener('contextmenu', function(event) {
				event.preventDefault();			
			});						
			link.convertToHTML = func;	
			let content = link.getAttribute('content');
			let url="";
			if( content.endsWith(".md")){
				url = window.location.href.includes("localhost")?"http://localhost/javascript/examples_book/":"";
			} else if ( content.endsWith(".ipynb")){
				url = window.location.href.includes("localhost")?"https://raw.githubusercontent.com/adminho/machine-learning/master/ipynb/":"";
			}
			link.content = `${url}${content}`;		
		}			
	}
	
	async function bildHTML(div, html) {
		let options =  {			
			cache: "no-cache",				
		};		
		let res = await fetch(html, options)
		let content = await res.text();
		div.innerHTML = content;		
	}	
	
	function clearAllLinkHilight() {
		let allLink = document.getElementsByClassName("link-chap");
		for(const link of allLink) {
			link.classList.remove("hilight-link");
		}					
	}
	
    function showMsgWaiting(enable=true){
		if (enable) {
			statusLoading.style.display = "block";
			targetDiv.classList.add("blur");
			bottomAds.style.display="none";
		} else {
			statusLoading.style.display = "none";
			targetDiv.classList.remove("blur");
			bottomAds.style.display="block";
		}
		
	}	
	function includeHTML(link) {		    
		if(!link){
			throw new Error(`Not have a link`);
		}
		
		document.title =  link.innerHTML;
		headlineDiv.innerHTML = `โค้ด${link.innerHTML}`;	
		showMsgWaiting(enable=true);		
		clearAllLinkHilight();
		link.classList.add("hilight-link");

		let options =  {		
			cache: "no-cache",				
		};
		
		//let currentLocation =  window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
		//let tmp = link.href.split('/');
		//let fileLink = tmp[tmp.length-1];
		//let url = `https://raw.githubusercontent.com/adminho/javascript/master/examples_book/${fileLink}`;		
		//alert(url);
		let url = link.content;
		fetch(url, options)
		.then( res => res.text())		
		.then( text => { 
			showMsgWaiting(enable=false);
			if(text.includes("404 Not Found")){
				targetDiv.innerHTML = '<h1>Not found page</h1>';		
			} else if (text.includes("Failed to open stream") || text.includes("Warning") ){
				targetDiv.innerHTML = '<h1>Failed to Connect</h1>';
			} else {								
				targetDiv.innerHTML = link.convertToHTML(text);		
			}			
		 }
		)
		.catch( err => {
			targetDiv.innerHTML = 'Not found page';		
			showMsgWaiting(enable=false);							
		});
    }
 
	function selectMenu(index){
		includeHTML(document.getElementsByClassName("link-chap")[index]); // select default link
	}
	
	async function renderPage(story, menu){		
		await bildHTML(mainMenu, `left_menu_${story}.html`);			
		await bildHTML(bottomAds, `ads_bottom_${story}.html`);	
		await bildHTML(rightAds, `ads_right_${story}.html`);	
				
		let description="";
		switch(story) {
			case "js":						
				initMenuEvent(genHTMLfromMDFile);		
				description ="เนื้อหาเกี่ยวกับ JavaScript ครบถ้วนอัดแน่น";
				break;
			case "py":			
				initMenuEvent(genHTMLfromIpynb);		
				description ="เนื้อหาเกี่ยวกับ Python ครบถ้วนอัดแน่น";
				break;	
			default:
				throw new Error("Can't reder a page.");
		}	
		document.getElementsByTagName('meta')["description"].content=description;
		selectMenu(menu);		
	}	

	window.resize = function(){				
		!isDesktop()?mainMenu.style.display = "block":mainMenu.style.display = "none";
	}