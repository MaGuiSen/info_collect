function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
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

exports = {
  formatTime,
  mergeObj,
  mergeArray,
  json2Form,
  getUriParams
}
