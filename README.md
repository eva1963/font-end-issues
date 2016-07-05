##前端问题总结


在平时的项目上我们总会遇到这样那样的问题，有时候为了赶项目我们不得不采取采取一些简单的但未必是最好的解决方案，所以我在空闲的时候就像把这些当时做出来的不是最优解决方案的一些问题重新梳理一下，然后找到最优解决方案，参照一些大网站的作法使得自己的网站更扎实，更稳定！

---

###1.多个大小相同的li自动循环

我们先来看一下图中：

![Mou icon](img/01.jpg)

旧解决方案：

ul + li  都按百分比，然后一行四个的话，每个li宽度都是25%，然后统一设置padding-right的值，再用css3的:nth-child(4n)将每个4n个li的padding值设置为0，之前一直这样做，但是一直都知道这样是不对的，你们也许发现了，如果最后一个padding值为0的话那么宽度自然就会比其他有padding值的li要宽，所以这个不是最优解决方案！

新方案：

最近浏览GitHub官网发现人家有一个页面也是这个排版，但是几个盒子大小都是出奇的一致，所以我就看了下，有兴趣了也可以自己浏览[点击这里](https://github.com/explore)，这个解决方案就是把父级元素的margin值设置为父，然后里面的盒子该怎么设置还怎么设置，这样自己元素就不会因为外间距的问题折行了，比如子元素的margin-right都为15px,那么就把ul的margin-right设置为-15px，这样就好了，原理暂时不清楚，待探究~


###2.左侧小三角的css实现

这个其实主要讲的是drop-shadow和普通box-shadow的差别，drop-shadow其实才算是真正意义上的投影，而box-shadow可能用阴影来描述更为合适；
![Mou icon](img/shadow.jpg)


###3.字体上下间隙的解决方法
我们都知道当定义了字体大小之后，字体上下总会有些间隙不能去除，用line-height=100%可能可以解决你的这一大烦恼；

![Mou icon](img/font-1.jpg)
![Mou icon](img/font-2.jpg)

###4.CSS 截断字符串
单行截断字符串,这里必须指定字符串的宽度

{
    /*指定字符串的宽度*/
    width:300px;   
    overflow: hidden;  
    /* 当字符串超过规定长度，显示省略符*/ 
    text-overflow:ellipsis;  
    white-space: nowrap;   
}


###5.去掉 a，input 在移动端浏览器中的默认样式

####1.禁止 a 标签背景
在移动端使用 a标签做按钮的时候，点按会出现一个“暗色”的背景，去掉该背景的方法如下

a,button,input,optgroup,select,textarea {
    -webkit-tap-highlight-color:rgba(0,0,0,0); /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
}

####2.禁止长按 a，img 标签长按出现菜单栏
使用 a标签的时候，移动端长按会出现一个 菜单栏，这个时候禁止呼出菜单栏的方法如下：

a, img {
    -webkit-touch-callout: none; /*禁止长按链接与图片弹出菜单*/
}

####3.流畅滚动

body{
    -webkit-overflow-scrolling:touch;
}

