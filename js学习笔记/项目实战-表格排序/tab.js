var oTab = document.getElementById('tab');
var thead = oTab.tHead;
var oThs = thead.rows[0].cells;
// 必须带tBodies[0]，否则报错：tBody.appendChild is not a function
var tBody = oTab.tBodies[0];
var oRows = tBody.rows;
var data = null;

// 获取后台中的数据
var xhr = new XMLHttpRequest;
// 异步选项必须是false,否则，data.length报错
xhr.open('get', './data.txt', false);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        var val = xhr.responseText;
        data = utils.toJson(val);

    }
}
xhr.send(null);

// 数据绑定
function bind() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        var oTr = document.createElement('tr');

        for (var key in cur) {
            var oTd = document.createElement('td');
            oTd.innerHTML = key === 'sex' ? (cur[key] === 0 ? "男" : "女") : cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}
bind();

// 实现隔行变色:这里我用css实现了，只是作为学习案例
function changeBg() {
    for (var i = 0; i < oRows.length; i++) {
        oRows[i].className = (i % 2 === 1) ? 'bg' : null;
    }
}
changeBg();

// 实现年龄的升降序
function sort() {
    var ary = utils.listToArray(oRows);
    var _this = this;

    _this.flag *= -1;
    ary.sort(function(a, b) {
        return (parseFloat(a.cells[1].innerHTML) - parseFloat(b.cells[1].innerHTML)) * _this.flag;
    });

    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg = null;
}

// var curson = document.getElementById("curson");
oThs[1].flag = 1;
oThs[1].onclick = function() {
    sort.call(this);
}