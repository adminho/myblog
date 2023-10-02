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
	
	$version = rand(10,100);
	
	$content = file_get_contents("main.html");
	if($content>0){
		$content = str_replace("__DESCRIPTION__", $description, $content);
		$content = str_replace("__VERSION__", $version, $content);		
		$content = str_replace("__STORY__", "'$story'", $content);
		$content = str_replace("__MENU__", $no-1, $content);
		echo $content;
		exit();  
	} else {
		echo "Error 505"; 
		exit();
	}
}
?>

<html lang="th">
<head>
<meta charset="UTF-8">
	<meta charset="UTF-8"> 	
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>ลิงก์ต่าง</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
<style>
div {
	margin:auto;
	font-size: 2rem;
	padding-top:10%
}
</style>
</head>
<body>
	<div class="container" style="text-align:center">
		<ul class="list-group"> 
		  <li class="list-group-item"><a href="index.php?id=756" target="_blank" class="text-reset">JavaScript</a></li>  
		  <li class="list-group-item"><a href="index.php?id=982" target="_blank" class="text-reset">Python</a></li>  		  
		</ul>
	</div>
</body>
</html>
