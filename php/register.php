<?
header("Content-type:text/html;charset=UTF-8");
$responseData=array("code" =>0,"message"=>"");
//取出传过来的数据
$Name=$_POST['Name'];
$Password=$_POST['Password'];

//验证一下接过来的数据
if(!$Name){
	$responseData["code"]=1;
	$responseData["message"]="用户名不能为空";
	echo json_encode($responseData);
	exit;
}
if(!$Password){
	$responseData["code"]=2;
	$responseData["message"]="密码不能为空";
	echo json_encode($responseData);
	exit;
}

//链接数据库
$link = mysql_connect("localhost", "root", "root");
//2判断是否连接成功
if (!$link) {
    $responseData['code']=3;
	$responseData['message']="数据库连接失败";
}
//3设置字符串
mysql_set_charset("utf8");

//4选择数据库
mysql_select_db("test");


//密码加密
//$Str=md5(md5(md5($Password)."xxx")."user");

//登录
$sql="SElECT * FROM user WHERE Name='{$Name}' AND Password='{$Password}'";

//发送sql语句
$res=mysql_query($sql);

//取出一行
$row=mysql_fetch_assoc($res);
if(!$row){
	$responseData["code"]=4;
	$responseData["message"]="用户名或密码错误";
	echo json_encode($responseData);
}else{
	$responseData["message"]="登录成功";
	echo json_encode($responseData);
}
mysql_close($link);
?>