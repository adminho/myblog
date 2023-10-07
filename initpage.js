	const __STORY__ = "js";
	const __MENU__ =  1;
	
	let targetDiv = document.getElementById("main");
	let statusLoading = document.getElementById("statusLoading");	
	let bottomAds = document.getElementById("bottom-ads");	
	let headlineDiv = document.getElementById("headline");
	let mainMenu = document.getElementById("main-menu");	
	let closeBtn = document.getElementById("btn-menu-close");		
	let adsBlurDiv = document.getElementById("ads-blur");
	let __ADS_TIMEOUT__ = undefined;
	
	function isDesktop(){			
		//if(  window.innerWidth >=768 || WURFL.form_factor === "Desktop" ) {			
		if(  window.innerWidth >=768 || (!window.location.href.includes("localhost") && WURFL.form_factor === "Desktop" )) {	
			return true;				
		} 
		return false;		
	}

    function showMenu(){
		mainMenu.style.display = "block";
		isDesktop() ? closeBtn.style.display = "none" : closeBtn.style.display = "block";		
	}
	
	function closeMenu(){
		mainMenu.style.display = "none";	
		closeBtn.style.display = "none";	
	}
	
	function turnOnAds() {
		if(__ADS_TIMEOUT__) {
			clearTimeout(__ADS_TIMEOUT__);
		}
		__ADS_TIMEOUT__=setTimeout(function (){
			adsBlurDiv.style.display = "block";
		}, 10000);
	}
	
	function clickMenu(event) {	
		event.preventDefault();	
		isDesktop() ? showMenu() : closeMenu();				
		let link = event.target				
		includeHTML(link);	
		turnOnAds();
	}
	
    function initMenuEvent(func){
		let allLink = document.getElementsByClassName("link-chap");
		for(const link of allLink) {
			link.addEventListener('click', clickMenu);		
			link.addEventListener('contextmenu', function(event) {
				event.preventDefault();			
			});						
			
			let url="";
			link.content  = link.getAttribute('content');						
			if (link.content.endsWith(".md")) {
				link.convertToHTML = genHTMLfromMDFile;			
				url = window.location.href.includes("localhost")?"http://localhost/javascript/examples_book/":"https://raw.githubusercontent.com/adminho/javascript/master/examples_book/";
				
			} else if (link.content.endsWith(".ipynb")) {			
				link.convertToHTML = genHTMLfromIpynb;	
				url = window.location.href.includes("localhost")?"http://localhost/machine-learning/ipynb/":"https://raw.githubusercontent.com/adminho/machine-learning/master/ipynb/";
			}	
			
			link.content =  `${url}${link.content}`;							
		}			
	}
	
	async function buildHTML(div, html) {
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
				targetDiv.innerHTML = link.convertToHTML ? link.convertToHTML(text): text;		
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
	
	function drawListImgMenu() {
		const canvas = document.getElementById("list-canvas");
		const ctx = canvas.getContext("2d");
		ctx.fillStyle = "#DCDCDC";
		ctx.fillRect(0,5,30,5);
		ctx.fillRect(0,13,30,5);
		ctx.fillRect(0,21,30,5);
	}
	
	async function renderPage(story, menu){		
		let path = "com";
		await buildHTML(mainMenu, `${path}/left_menu_${story}.html`);			
		buildHTML(bottomAds, `${path}/ads_bottom_${story}.html`);	 
		buildHTML(document.getElementById("right-ads"), `${path}/ads_right_${story}.html`);	
		buildHTML(document.getElementById("ads-center"), `${path}/ads_right_${story}.html`);	
		
		initMenuEvent();		
		selectMenu(menu);		
		drawListImgMenu();
		
		document.getElementById("btn-menu").onclick= showMenu;
		document.getElementById("btn-menu-close").onclick = closeMenu;
		document.getElementById("ads-close").onclick = function (event) {
			adsBlurDiv.style.display = "none";				
		}
		window.onresize = function(){				
			isDesktop() ? showMenu() : closeMenu();	
		}		
		
		turnOnAds(); 
	}	

	