<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>百度新闻</title>
    <link rel="stylesheet" href="css/amazeui.min.css">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
<!--头部＋导航-->
<header class="am-topbar am-topbar-inverse app-header-box">
    <div class="app-header">
        <div class="middle">
            <div class="inner">
                <a href="index.php"><div class="title"></div></a>
            </div>
        </div>
        <div class="left">
            <div class="baidu-logo"></div>
            <div class="baidu-user"></div>
        </div>
        <div class="right">
            <div class="baidu-search"></div>
            <div class="baidu-more"></div>
        </div>
    </div>
    <ul class="am-nav am-nav-pills app-cate">
        <li><a href="#" data-cate="bj">百家</a></li>
        <li><a href="#" data-cate="bd">本地</a></li>
        <li><a href="#" data-cate="tp">图片</a></li>
        <li><a href="#" data-cate="yl">娱乐</a></li>
        <li><a href="#" data-cate="sh">社会</a></li>
    </ul>
</header>

<!--内容-->
<article>
    <div class="loading">
        <i class="am-icon-spinner am-icon-spin"></i>
    </div>
    <?php
        $servername = "127.0.0.1";
        $username = "root";
        $password = "123456";
        $dbname = "baiduNews";
        // 创建连接
        $con = mysql_connect($servername, $username, $password);
        if (!$con){
            die('Could not connect: ' . mysql_error());
        }
    ?>
    <div class="content">
        <div data-am-widget="slider" class="am-slider am-slider-a5" data-am-slider='{"directionNav":false}'>
            <ul class="am-slides app-slides">
                <!-- <li>
                    <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg">
                </li>
                <li>
                    <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg">
                </li> -->
                 <?php
                    mysql_select_db($dbname, $con);
                    mysql_query("set names 'utf8'");
                    $result = mysql_query("SELECT * FROM news limit 4");
                    while($row = mysql_fetch_array($result)){
                        echo "<li><img src='" . $row['imgUrl'] . "'></li>";
                     }
                ?>

            </ul>
        </div>
        <div class="app-newsList">
            <div data-am-widget="list_news" class="am-list-news am-list-news-default">
                <div class="am-list-news-bd">
                    <ul class="am-list">
                        <?php
                            mysql_query("set names 'utf8'");
                            $result = mysql_query("SELECT * FROM news");
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
                            mysql_close($con);
                        ?>
                    </ul>
                </div>
            </div>
            <!-- <button class="am-btn am-btn-default app-loadMore">
                点击加载更多
                <i class="am-icon-spinner am-icon-spin"></i>
                加载中
            </button> -->
        </div>
    </div>
</article>

<div data-am-widget="gotop" class="am-gotop am-gotop-default app-goTop">
    <a href="#top" title="回到顶部">
        <span class="am-gotop-title">回到顶部</span>
        <!-- <i class="am-gotop-icon am-icon-chevron-up"></i> -->
    </a>
</div>

<script src="js/jquery.min.js"></script>
<script src="js/amazeui.min.js"></script>
<script src="js/app.js"></script>
</body>
</html>