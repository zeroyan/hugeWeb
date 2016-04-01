任务9
express实践。express4.0 用npm start开始服务器

任务14
网络安全
防止sql注入：
    findZone中保证m，n必须为正整数；
    findById保证id必须为正整数；
    findByCate必须为类别名字缩写；
    ?addOneNew 该如何防止sql、xss注入？，内部内容好多。escape的话内容里的符号也乱码了。。
防止xss注入：
    url输入的东西全部都过滤以下
？escape函数我看js不建议使用了，是有新的函数可替代吗？