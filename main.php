<?php

$id= isset($_GET['id']) ? $_GET['id'] : '';
$no= isset($_GET['no']) ? $_GET['no'] : '';

if( !empty($id) ){	
	$story = "";
	if($id === "756") {
		$story = "js";
		$description ="เนื้อหาเกี่ยวกับ JavaScript ครบถ้วนอัดแน่น";				
	} else if($id === "982") {
		$story = "py";
		$description ="เนื้อหาเกี่ยวกับ Python ครบถ้วนอัดแน่น";
	} else {
		echo "Error 404";
		exit();
	}

	if( empty($no) || $no<1) {
		$no = 1;
	}
	
	$version = rand(10,100);}
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
		
	<!--https://web.wurfl.io/#wurfl-js-->
	<script type='text/javascript' src="//wurfl.io/wurfl.js"></script>
	<link href="main.css?v=<?php echo $version;?>" rel="stylesheet" > 
	<link href="md.css?v=<?php echo $version;?>" rel="stylesheet" >  
	<link href="ipynb.css?v=<?php echo $version;?>" rel="stylesheet" >  
</head>
<body>		
	<div class="header">
		<span id="headline" class="headline"></span>
	</div>
	<div><img id="statusLoading" class='rotate' src='img/process.png'></div>    
	<div id="main" class="main"></div>
	<div id="right-ads" class="ads"></div>	
	<div id="bottom-ads" class="sale" style="display:none"></div>	
	
	<div id="btn-menu" class="btn-menu">
		<img src="img/list.png" width="30px">
	</div>
	<div id="main-menu" class="main-menu"></div>		
	<div class="footer"><strong>แนะนำเปิดบนคอมพิวเตอร์ตั้งโต๊ะ หรือโน๊ตบุค </strong></div>
	
	<script src="util.js?v=<?php echo $version;?>"></script>
	<script src="runjscode.js?v=<?php echo $version;?>"></script>	
	<script src="md2html.js?v=<?php echo $version;?>"></script>	
	<script src="ipynb2html.js?v=<?php echo $version;?>"></script>	
	<script src="initpage.js?v=<?php echo $version;?>"></script>			
	<script>	
	renderPage(<?php echo "'$story'";?>, <?php echo $no-1;?>);							
	</script>
</body>
</html>