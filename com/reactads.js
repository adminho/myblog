function RightAds(props) {
	return <div>
	<a href="https://www.mebmarket.com/web/index.php?action=BookDetails&data=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjE1Njg1NCI7fQ" target="_blank">
	<img src={props.src} width="130"/>
	<br/><p style={{textAlign:"center"}}>เวอร์ชั่น ebook</p>
	</a>	
	</div>;	
}

function BottomAds(props) {
	return <div>
	<strong>{props.describe}</strong><br/>
	<iframe class="iframe_seller_link" width="430" height="220" src={props.src} frameborder="0"></iframe>
	</div>;	
}


function renderAds(story) {
		 switch(story) {
			case "js_code":
			case "js_html":
				ReactDOM.render(<RightAds 
					href="https://www.mebmarket.com/web/index.php?action=BookDetails&data=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjE1Njg1NCI7fQ"
					src="https://cdn-local.mebmarket.com/meb/server1/156854/Thumbnail/book_detail_large.gif"/>,  
					document.getElementById("right-ads"));	
					
				ReactDOM.render(<RightAds 
					href="https://www.mebmarket.com/web/index.php?action=BookDetails&data=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjE1Njg1NCI7fQ"
					src="https://cdn-local.mebmarket.com/meb/server1/156854/Thumbnail/book_detail_large.gif"/>,  
					document.getElementById("ads-center"));					
				
				ReactDOM.render(<BottomAds 
					describe="สามารถซื้อ ebook ฉบับเต็มได้ที่ลิงก์นี้"
					src="https://www.mebmarket.com/embed.php?seller_link=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjE1Njg1NCI7fQ"/>,  
					document.getElementById("bottom-ads"));	
					
				break;
				
			case "ipynb":
				ReactDOM.render(<div><RightAds 
					href="https://www.mebmarket.com/web/index.php?action=BookDetails&data=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjEwODI0NiI7fQ"
					src="https://cdn-local.mebmarket.com/meb/server1/108246/Thumbnail/book_detail_large.gif"/>
						<RightAds 
					href="https://www.mebmarket.com/web/index.php?action=BookDetails&data=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjE5MjkyMiI7fQ"
					src="https://cdn-local.mebmarket.com/meb/server1/192922/Thumbnail/book_detail_large.gif"/></div>,  
					document.getElementById("right-ads"));	
					
				ReactDOM.render(<div><RightAds 
					href="https://www.mebmarket.com/web/index.php?action=BookDetails&data=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjEwODI0NiI7fQ"
					src="https://cdn-local.mebmarket.com/meb/server1/108246/Thumbnail/book_detail_large.gif"/>
						<RightAds 
					href="https://www.mebmarket.com/web/index.php?action=BookDetails&data=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjE5MjkyMiI7fQ"
					src="https://cdn-local.mebmarket.com/meb/server1/192922/Thumbnail/book_detail_large.gif"/></div>,  
					document.getElementById("ads-center"));	
				
				ReactDOM.render(<div><BottomAds 
					describe="ถ้าสนใจ Python สามารถซื้อ ebook ที่ปูพื้นฐานตั้งแต่ติดลบ"
					src="https://www.mebmarket.com/embed.php?seller_link=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjE5MjkyMiI7fQ&1695639507572"/>
						<BottomAds 
					describe="อ่านจบแล้วสามารถต่อยอดไปศึกษา AI ได้"
					src="https://www.mebmarket.com/embed.php?seller_link=YToyOntzOjc6InVzZXJfaWQiO3M6NzoiMTcyNTQ4MyI7czo3OiJib29rX2lkIjtzOjY6IjEwODI0NiI7fQ&1695661481887"/></div>,  
					document.getElementById("bottom-ads"));						
					
				break;		  
		 } // end switch
		} // end function		