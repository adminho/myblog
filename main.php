<?php

$id= isset($_GET['id']) ? $_GET['id'] : '';
$no= isset($_GET['no']) ? $_GET['no'] : '';

if( !empty($id) ){	
	$story = "";
	if($id === "756") {
		$story = "js_code";
		$description ="เนื้อหาเกี่ยวกับ JavaScript ครบถ้วนอัดแน่น";				
		
	} else if($id === "128") {
		$story = "js_html";
		$description ="เนื้อหาเกี่ยวกับ JavaScript ครบถ้วนอัดแน่น";
		
	} else if($id === "982") {
		$story = "ipynb";
		$description ="เนื้อหาเกี่ยวกับ Python ครบถ้วนอัดแน่น";
	
	} else {
		echo "Error 404";
		exit();
	}

	if( empty($no) || $no<1) {
		$no = 1;
	}
	
	$version = rand(10,100);

} else {
	echo file_get_contents("index.html");
	exit();
}
?>


<html lang="th">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<meta name="description" content="<?php echo $description;?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">		
	<title>กำลังโหลด ...</title>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
	
	<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
	
	<!--https://web.wurfl.io/#wurfl-js-->
	<script type='text/javascript' src="//wurfl.io/wurfl.js"></script>
	<link href="css/main.css?v=<?php echo $version;?>" rel="stylesheet" > 
	<link href="css/md.css?v=<?php echo $version;?>" rel="stylesheet" >  
	<link href="css/ipynb.css?v=<?php echo $version;?>" rel="stylesheet" >  
</head>
<body>		
	<div class="header">
		<span id="headline" class="headline"></span>
	</div>
	<!-- <div id="statusLoading"><canvas id="process-canvas" class="rotate" width="400" height="400"></canvas></div> -->   	
	<div id="main" class="main"></div>
	<div id="right-ads" class="ads"></div>	
	<div id="bottom-ads" class="sale" style="display:none"></div>	
	<div id="ads-blur" class="ads-blur">
		<div id="ads-center-div" class="ads-center">
			<span id="ads-close"><font color="blue" style="cursor:pointer; font-weight: bold">[Close]&nbsp;&nbsp;&nbsp;&nbsp;</font></span>
			<div id="ads-center"></div>
		</div>		
	</div>
	<div id="btn-menu" class="btn-menu"><canvas id="list-canvas" width="30" height="30"></canvas></div>
	<div id="btn-menu-close" class="btn-menu-close"><span>Close</span></div>
	<div id="main-menu" class="main-menu"></div>	
	<div id="root"></div>
	<div class="footer"><strong>แนะนำเปิดบนคอมพิวเตอร์ตั้งโต๊ะ หรือโน๊ตบุค </strong></div>
	
	<script src="lib/util.js?v=<?php echo $version;?>"></script>
	<script src="lib/runjscode.js?v=<?php echo $version;?>"></script>	
	<script src="lib/md2html.js?v=<?php echo $version;?>"></script>	
	<script src="lib/ipynb2html.js?v=<?php echo $version;?>"></script>		
	<script src="lib/edithtm.js?<?php echo $version;?>"></script>		
	
	<script src="lib/initpage.js?v=<?php echo $version;?>"></script>	
	<script>	
	     renderPage(<?php echo "'$story'";?>, <?php echo $no-1;?>);			 	 
	</script>	
	
	<script src="com/reactads.js?v=<?php echo $version;?>" type="text/babel"></script>		
    <script type="text/babel">
		renderAds(<?php echo "'$story'";?>);	
   </script>
   
</body>
</html>