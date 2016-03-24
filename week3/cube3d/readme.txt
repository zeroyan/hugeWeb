第三周作业——3D魔方
很有意思的一个作业, 在网上看到了一个很好玩的盒子，也简单实现了下。
but，有些问题：
1. perspective在小一些的px下，发现后面的div变小(近大远小肯定的，但这样发现在做旋转动画的时候cube发生扭曲，所以我把perspective设置超级大，还有其他方法能准确的不变形嘛？
2. transform-origin是改变基准点，不同的div设置不同的transform-origin值(就rotate为例)，看不出什么规律啊，会不会把transform-origin设置合适了，就不会变形了？

修改1:
1. 上面两个问题明白的差不多了，但当.cube的perspective调小是会发现正方体扭曲了。有办法再旋转时候设置角度解决吗？