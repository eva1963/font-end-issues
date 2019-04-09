/**
 * Created by Eva on 16/8/3.
 */
$(function(){
    window.onpopstate = function(event) {
        alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    };
//绑定事件处理函数.
    history.pushState({page: 1}, "title 1", "?page=1");    //添加并激活一个历史记录条目 http://example.com/example.html?page=1,条目索引为1
    history.pushState({page: 2}, "title 2", "?page=2");    //添加并激活一个历史记录条目 http://example.com/example.html?page=2,条目索引为2
    history.replaceState({page: 3}, "title 3", "?page=3"); //修改当前激活的历史记录条目 http://ex..?page=2 变为 http://ex..?page=3,条目索引为3
    history.back(); // 弹出 "location: http://example.com/example.html?page=1, state: {"page":1}"
    history.back(); // 弹出 "location: http://example.com/example.html, state: null
    history.go(2);  // 弹出 "location: http://example.com/example.html?page=3, state: {"page":3}

    // 浏览器回退事件
    var detectBack = {
        initialize: function() {
            //监听hashchange事件
            window.addEventListener('hashchange', function() {
                console.log('====1====');
                //为当前导航页附加一个tag
                this.history.replaceState('hasHash', '', '');
            }, false);

            window.addEventListener('popstate', function(e) {
                console.log('====2====');
                if (e.state) {
                    //侦测是用户触发的后退操作, dosomething
                    //这里刷新当前url
                    this.location.reload();
                }
            }, false);
        }
    }

    // detectBack.initialize();




    $('.tooltip').mouseover(function(e){
        this.mytitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>" +this.mytitle+ "</div>";
        var x = 20;
        var y = 10;

        $('body').append(tooltip);
        $('#tooltip').css({
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"
        }).show("fast");
    }).mouseout(function(){
        this.title = this.mytitle;
        $("#tooltip").remove();
    });


//jQuery学习之表单对象属性
    $('#form1 input:enabled').val('这里变化了！');
    $('#form1 input:disabled').val('这里变化了111！');

    console.log($('#form1 input:checked').length);
    console.log($('#form1 :text').length);
    console.log($('select :selected').text());


    //偶数行背景变色
    $('#tb tbody tr:odd').css('background','red');
    //奇数行背景变色
    $('#tb tbody tr:even').css('background','pink');


//<!-- jQuery学习之:focus -->
    $( "#content" ).delegate( "*", "focus blur", function( event ) {
        var elem = $( this );
        setTimeout(function() {
            elem.toggleClass( "focused", elem.is( ":focus"));
        }, 0);
    });


//张鑫旭的轮播图学习
//    window.onload = function(){
//        var oMove = document.getElementById("imageMove");
//        //运动函数
//        var funMove = function(pos){
//            var move = function(){
//                var curPos = parseInt(oMove.style.top,10);
//                var speed = 60;
//                if(Math.abs(curPos-pos)>speed){
//                    //判断移动方向
//                    curPos-=((curPos-pos)/Math.abs(curPos-pos))*speed;
//                    oMove.style.top = curPos+"px";
//                    setTimeout(move,30);
//                }else{
//                    oMove.style.top = pos + "px";
//                }
//            };
//            setTimeout(move,10);
//        };
//        var oClick = document.getElementById("imageLeft").getElementsByTagName("a");
//        for(var i=0; i<oClick.length; i+=1){
//            var flag = 0;
//            var timeout;
//            //鼠标经过播放动画
//            oClick[i].onmouseover = function(i){
//                return function(e){
//                    clearTimeout(timeout);
//                    oClick[flag].className = "";
//                    this.className = "on";
//                    funMove(-390*i);
//                    flag = i;
//                }
//            }(i);
//            oClick[i].onmouseout = function(i){
//                return function(e){
//                    timeout = setTimeout(step,4000);
//                }
//            }(i);
//            //定时器播放动画
//            if(i === 0){
//                var step = function(){
//                    oClick[flag].className = "";
//                    flag = flag>=oClick.length-1?0:flag+1;
//                    oClick[flag].className = "on";
//                    funMove(-390*flag);
//                    timeout = setTimeout(step,4000);
//                };
//                setTimeout(step,4000);
//            }
//        }
//    };

    console.log($('#imageLeft:parent'));
//    console.log($('#imageLeft:parent'));
//    console.log($('#imageLeft').parent());
//    console.log($('#imageLeft').parents());

//jQuery案例：显示更多双效
    /* 让li从第七个开始隐藏 */
    var $category = $('.usbCategoryBox ul li:gt(5):not(:last)');
        $category.hide();

    /* 点击显示更多选项触发 */
    var $togglebtn = $('.showmore > a');

    $togglebtn.click(function(){
        if($category.is(':visible')) {
            $category.hide();
            $(this).find('span').css('background','pink').text('全部显示品牌');
            /* filter方法筛选出来符合要求的选项 */
            $('ul li').removeClass("promoted");
        }
        else {
            $category.show();
            $(this).find('span').css('background','pink').text('精简显示品牌');
            /* filter方法筛选出来符合要求的选项 */
            $('ul li').filter(":contains('佳能')").addClass("promoted");
        }

        return false;
    });


    //$togglebtn.remove();
    //$togglebtn.find('span').replaceWith('12312');
    //console.log($togglebtn.find('span').attr('title','098'));
    //console.log($('.overflow-father').offset());
    //console.log($('.overflow-child').position());
    //console.log($('.overflow-child').scrollTop(300));
    //console.log($('.overflow-child').scrollLeft(80));



});

//张鑫旭的form表单学习
//window.seajs &&
//seajs.config({
//    base: "//mp.gtimg.cn/old_mp/assets/js",
//    map: [[/^(.*\.(?:css|js))(.*)$/i, '$1?v=' + Math.random()]],
//    alias: {
//        jquery: 'plugin/jquery'
//    }
//}).use(['jquery'], function() {
//    var fnMoney = function() {
//        // 单价
//        var unitPrice = 0,
//        // 数量
//            number = 1,
//        // 运费
//            freight = 0,
//        // 运费险
//            insurance = 0;
//
//        // 真实值
//        radioTypes.each(function() {
//            if ($(this).prop('checked')) {
//                unitPrice = this.value;
//            }
//        });
//
//        number = elNumber.val();
//
//        freight = elCity.val() || 0;
//
//        if (elInsur.prop('checked')) {
//            insurance = elInsur.val();
//        }
//
//        var total = unitPrice * number + freight*1 + insurance*1;
//
//        if (unitPrice == 0) {
//            total = 0;
//        }
//
//        elTotal.html(total || 0);
//
//    };
//
//    var fnSubmit = function() {
//        alert('提交的数据是：' + elForm.serialize());
//    };
//
//    var radioTypes = $('input[name="type"]').click(function() {
//            $(this).parent().find('p').hide();
//            $('#' + this.id + 'P').show();
//            fnMoney();
//        }),
//        elNumber = $('#number').on('oninput' in document.body? 'input': 'change', fnMoney),
//        elCity = $('#citySelect').change(function() {
//            var elPrice = $('#transPrice');
//            if (this.value) {
//                elPrice.html(this.value).parent().show();
//            } else {
//                elPrice.html(0).parent().hide();
//            }
//            fnMoney();
//        }),
//        elInsur = $('#checkInsur').click(fnMoney),
//        elForm = $('#validateForm').submit(function(event) {
//            if (!$(this).attr('novalidate')) {
//                fnSubmit();
//            }
//            event.preventDefault();
//        }),
//        elTotal = $('#total');
//
//
//    // 加载mpqq  也就是QQ公众号需要的脚本
//    $('#excuteBtn').click(function() {
//        if ($(this).hasClass('disabled')) return false;
//
//        // 加载CSS
//        var style = document.createElement('link');
//        style.rel = 'stylesheet';
//        style.href = '//mp.gtimg.cn/assetscom/theme/modern/common/ui.css';
//        document.getElementsByTagName('head')[0].appendChild(style);
//
//        // 加载JS
//        seajs.use([
//            'common/ui/Radio',
//            'common/ui/Checkbox',
//            'common/ui/Select',
//            'common/ui/DateTime',
//            'common/ui/Tips',
//            'common/ui/Dialog',
//            'common/ui/Validate'
//        ], function(Radio, Checkbox, Select, DateTime, Tips, Dialog, Validate) {
//            // 单复选框和下拉初始化
//            Radio.init();
//            Checkbox.init();
//            Select.init();
//
//            // 日期
//            new DateTime($('#achieveDate'));
//
//            // 黑色tips初始化
//            new Tips($('.ui_tips'));
//
//            // 弹框
//            window.alert = function(message) {
//                new Dialog().alert(message);
//            };
//
//            // 验证
//            new Validate(elForm, fnSubmit);
//        });
//
//        elForm.addClass('loaded');
//
//        $(this).html('加载和执行成功').addClass('disabled');
//    });
//});
//
//// 加载CSS
//var style = document.createElement('link');
//style.rel = 'stylesheet';
//style.href = '//mp.gtimg.cn/assetscom/theme/modern/common/ui.css';
//document.getElementsByTagName('head')[0].appendChild(style);
//
//// 加载JS
//seajs.use([
//    'common/ui/Radio',
//    'common/ui/Checkbox',
//    'common/ui/Select',
//    'common/ui/DateTime',
//    'common/ui/Tips',
//    'common/ui/Dialog',
//    'common/ui/Validate'
//], function(Radio, Checkbox, Select, DateTime, Tips, Dialog, Validate) {
//    // 单复选框和下拉初始化
//    Radio.init();
//    Checkbox.init();
//    Select.init();
//
//    // 日期
//    new DateTime($('#achieveDate'));
//
//    // 黑色tips初始化
//    new Tips($('.ui_tips'));
//
//    // 弹框
//    window.alert = function(message) {
//        new Dialog().alert(message);
//    };
//
//    // 验证
//    new Validate(elForm, fnSubmit);
//});
