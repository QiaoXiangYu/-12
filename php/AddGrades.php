<?php
header("Content-type:text/html;charset=UTF-8");
//统一返回格式
$responseData=array("code" =>0,"message"=>"");
$name=$_POST['name'];
$yw=$_POST['yw'];
$sx=$_POST['sx'];
$yy=$_POST['yy'];
$ty=$_POST['ty'];

//链接数据库
$link = mysql_connect("localhost", "root", "root");
//2判断是否连接成功
if (!$link) {
    $responseData['code']=1;
	$responseData['message']="数据库连接失败";
	echo json_encode($responseData);
	exit;
}
//3设置字符串
mysql_set_charset("utf8");

//4选择数据库
mysql_select_db("test");

//5准备sql语句
$sql = "INSERT INTO student(name,yw,sx,yy,ty) VALUES('{$name}',{$yw},{$sx},{$yy},{$ty})";

//6发送sql语句
$res=mysql_query($sql);



if(!$res){
	$responseData['code']=2;
	$responseData['message']="添加学生失败";
	//返回给前台页面的你
	echo json_encode($responseData);
	exit;
}
else{
	$responseData['message']="添加学生成功";
	echo json_encode($responseData);
}
//关闭数据库
mysql_close($link);
?>
