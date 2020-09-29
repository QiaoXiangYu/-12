<?php
//设置编码方式
header("Content-type:text/html;charset=utf-8");
//1 连接数据库  //1连接ip/域名  //2用户名  //3密码
$link = mysql_connect("localhost", "root", "root");
mysql_query("set names 'utf8'",$link);
//2判断是否连接成功
if (!$link) {
    echo "连接失败";
    exit;//终止所有代码
}

//3设置字符串
mysql_set_charset("utf-8");

//4选择数据库
mysql_select_db("test");

//5准备sql语句
$sql = "select * from student";

//6发送sql语句
$res = mysql_query($sql);

$arr = array();
//7处理结果
while($row = mysql_fetch_assoc($res)){
	array_push($arr,$row);
}

echo json_encode($arr);


//8关闭数据库
mysql_close($link);
?>