var utils = {
    // 将类数组转化为数组
    listToArray: function(likeArray) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeArray);
        } catch (e) {
            for (var i = 0; i < likeArray.length; i++) {
                ary[ary.length] = likeArray[i];
            }
        }
        return ary;
    },

    // 把json格式的字符串转化为json格式的对象
    toJson: function(str) {
        // 两种写法
        // 第一种：try catch
        var val = null;
        try {
            val = JSON.parse(str);
        } catch (e) {
            // 为了兼容IE6，7
            val = eval("(" + str + ")");
        }
        return val;
        /*
         第二种写法：
            return "JSON" in window ? JSON.parse : eval("(" + str + ")"); 
        */
    }
}