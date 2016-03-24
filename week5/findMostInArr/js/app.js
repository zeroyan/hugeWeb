/**
 * Created by zeroyan on 15/12/25.
 */
window.onload = function(){
    var arr = ['a', 'x', 'm', 'd', 'm', 'a', 'k', 'm', 'm', 'a'];
    //var arr = ['a', 'x', 'a'];

    //找到次数最多对象
    var findMostObj = function(arr, map){
        //边界条件
        if ( arr.length == 0 ) return -1;

        //使用类似hsah表的方式，去重对象，并保存该对象位置
        for(var i = 0, j = arr.length; i < j; i++ ){
            if (map[arr[i]] == null) {
                var temp = new Array();
                temp[0] = i+1;
                map[arr[i]] = temp;
            }
            else (map[arr[i]]).push(i+1);
        }

        //再小的hash表中找到出现次数最多的对象
        var max = -1;
        var mostObj = '';
        for(var o in map){
            thisKeyLength = map[o].length;
            if( thisKeyLength > max ) {
                max = thisKeyLength;
                mostObj = o;
            }
        }
        return mostObj;
    };

    //输出
    var map = {};
    var obj = findMostObj(arr, map);
    document.getElementById('p').innerHTML = '最大出现对象' + obj + ", 下标为" + map[obj];
};