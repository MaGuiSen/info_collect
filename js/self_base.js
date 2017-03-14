function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
  // return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//合并对象 override是否覆盖相同的属性
function mergeObj(des, src, override){
   var result = {};
   for( var key in des){
      result[key] = des[key];
   }
   for( var key in src){
       if(override || !(key in des)){
           result[key] = src[key];
       }
   }
   return result;
}

function mergeArray(des, src){
   for(var i in src){
      des.push(src[i]);
   }
   return des;
}

function json2Form(json) {
    var str = [];
    for(var p in json){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
    }
    return str.join("&");
}

function getUriParams(uri, param) {
    var query = decodeURI(uri);//获取URL地址中？后的所有字符
    console.log(query)
    var iLen = param.length;//获取你的参数名称长度
    var iStart = query.indexOf(param);//获取你该参数名称的其实索引
    if (iStart == -1)//-1为没有该参数
        return "";
    iStart += iLen + 1;
    var iEnd = query.indexOf("&", iStart);//获取第二个参数的其实索引
    if (iEnd == -1)//只有一个参数
        return query.substring(iStart);//获取单个参数的参数值
    return query.substring(iStart, iEnd);//获取第二个参数的值
}

var c = "active";
function toast(b) {
    var d = document.createElement("div");
    d.classList.add("toast-container"), d.innerHTML = '<div class="toast-message">' + b + "</div>", d.addEventListener("webkitTransitionEnd", function () {
        d.classList.contains(c) || d.parentNode.removeChild(d)
    }), document.body.appendChild(d), d.offsetHeight, d.classList.add(c), setTimeout(function () {
        d.classList.remove(c)
    }, 2e3)
}

function showLoading(isShow) {
    var d = document.getElementById("loading_lay");
    if(isShow){
        d.style.display = 'flex';
    }else{
        d.style.display = 'none';
    }
}

function parseDom(arg) {

    var objE = document.createElement("div");

    objE.innerHTML = arg;

    return objE.childNodes[0];

};

function showPhotoPreview(imgUrl) {
    var reader = new FileReader();
    reader.readAsDataURL(this.files[i]);
    reader.onload = function(e){
        var img = document.getElementById('photo_preview_result')
        img.src = this.result;
        imgData = this.result;
        img.onload = function(){
            // 打印
            img.style.width = img.width+'px';
            img.style.height = img.height + 'px';
        };
    }
}

function copy(value)
{
    var Url2=document.getElementById("biao1");
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert("已复制好，可贴粘。");
}

function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}

/**
 * 随机抽奖
 * @param min 最小的随机数，一般从0开始
 * @param max 最大随机数，为数组的长度-1
 * @param resultNum
 */
function getRandomAward(min,max,resultNum){
    resultNum = parseInt(resultNum);
    var results = [];
    if(max < min){
        return [];
    }
    if(resultNum >= max + 1){
        for(var i=0;i<= max ; i++){
            results.push(i);
        }
        return results;
    }
    while(true){
        if(results.length < resultNum){
            var num = GetRandomNum(min,max);
            if(!isExist(results,num)){
                results.push(num);
            }
        }else{
            break;
        }
    }
    results = results.sort(function(a,b){
        return a-b}
    )
    return results;
}

function isExist(results,num) {
    for(var i in results){
        if(results[i] == num){
            return true;
        }
    }
    return false;
}
