<?php

$id= isset($_GET['id']) ? $_GET['id'] : '';
$no= isset($_GET['no']) ? $_GET['no'] : '';

$story = "";
if($id === "756") {
	$story = "js";
} else if($id === "982") {
	$story = "py";
} else {
	echo "Error 404";
	exit();
}

if(empty($no) || $no<1) {
	$no=1;
}


$content = file_get_contents("main.html");
if($content>0){
  $content = str_replace("__STORY__", "'$story'", $content);
  $content = str_replace("__MENU__", $no-1, $content);
  echo $content;
  exit();  
} else {
  echo "Error 505"; 
  exit();
}

?>