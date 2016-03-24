第一周作业——仿写baidu首页。
简单的实现了一下，加入了<meta>的移动端自适应，但是发现在手机端适应的并不好，和baidu.com还有很大差距，今后等待老师详解吧。在做作业中遇到一下几个问题。
1.对于box-model一直不熟悉，对position属性应用的不熟练。可以发现中间input标签对的不是很齐，那个小喇叭也会在窗口很小时候跑偏。
2.想让整个container垂直剧中,用vertical-align从来没成功过（肯定是理解错了），于是就获得client的长和宽。
    var container = document.getElementsByClassName('container');
    container.style.marginTop = (docHeight / 2) + "px";
  但一直说marginTop是undefined，最终没挑出来，求老师解答TT。
  最后索性margin-top: 5%;
第一次作业应该是就仅仅完成一个页面展示吧，自己加了很多多余的就当熟悉一下，以前学过一些前端知识都忘了，不过还是个菜鸟哎。。。