<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>百度新闻后台管理</title>
</head>
<body>

<h1>
<?php
    header("Content-Type:text/html; charset=utf8");
    date_default_timezone_set('prc');

    $servername = "127.0.0.1";
    $username = "root";
    $password = "123456";
    $dbname = "baiduNews";

    // 创建连接
    $con = mysql_connect($servername, $username, $password);
    if (!$con){
        die('Could not connect: ' . mysql_error());
    }

    mysql_select_db($dbname, $con);
    mysql_query("set names 'utf8'");

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        if(empty($_POST['title']) || empty($_POST['category'])){
            echo "标题和类别不能为空，请返回重新设置";
        }else{
            $sql = "INSERT INTO news (title, imgUrl, description, createTime, category) 
                    VALUES (
                        '".$_POST['title']."', 
                        '".$_POST['imgUrl']."', 
                        '".$_POST['description']."',
                        '".date("Y-m-d h:i:s",time())."',
                        '".$_POST['category']."')";
            $result = mysql_query($sql);
            if($result) echo "添加成功，请返回。";
        }
    }

    while($row = mysql_fetch_array($result)){
     }

    mysql_close($con);
?>
</h1>

</body>
</html>