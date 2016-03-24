<?php
    // header("Content-Type:text/html; charset=utf8");
    // date_default_timezone_set('prc');

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
        $result = mysql_query("SELECT * FROM news WHERE category='".$_POST['category']."'");

        while($row = mysql_fetch_array($result)){
            if(!empty($row['imgUrl'])){
                $img_div = "<div class='am-u-sm-4 am-list-thumb'><a href='#'><img src=". $row['imgUrl'] ."/></a></div>";
                $ctn_div = "<div class='am-u-sm-8 am-list-main'>
                                <h3 class='am-list-item-hd'><a href='#'>". $row['title'] ."</a></h3>
                                <div class='am-list-item-text'>". $row['description'] ."</div>
                            </div>";
                $res = "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left' data-index='". $row['id'] ."'>"
                            . $img_div . $ctn_div . 
                        "</li>";
                echo $res;
            }else{
                $ctn_div = "<div class='am-list-main'>
                                <h3 class='am-list-item-hd'><a href='#'>". $row['title'] ."</a></h3>
                                <div class='am-list-item-text'>". $row['description'] ."</div>
                            </div>";
                $res = "<li class='am-g am-list-item-desced' data-index='". $row['id'] ."'>"
                            . $ctn_div . 
                        "</li>";
                echo $res;
            }
         }

        // while($row = mysql_fetch_array($result)){
        //   echo $row['title'];
        //   echo "<br />";
        // }
    }

    // while($row = mysql_fetch_array($result)){
    //  }

    mysql_close($con);
?>