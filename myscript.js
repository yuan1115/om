function GetRequest() {   
   var url = location.search; //获取url中"?"符后的字串   
   var theRequest = new Object();   
   if (url.indexOf("?") != -1) {   
      var str = url.substr(1);   
      strs = str.split("&");   
      for(var i = 0; i < strs.length; i ++) {   
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
      }   
   }   
   return theRequest;   
}   
var para = GetRequest()
var token = para.token
var Ajax={
  get: function(url, fn) {
    // XMLHttpRequest对象用于在后台与服务器交换数据   
    var xhr = new XMLHttpRequest();            
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      // readyState == 4说明请求已完成
      if (xhr.readyState == 4 ) { 
        // 从服务器获得数据 
        fn.call(this, xhr.responseText)
        // console.log(xhr.responseText)
      }
    };
    xhr.send();
  },
  // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send(data);
  }
}
Ajax.get("https://api.zhiyuan1115.wang/test.php?token="+token,function(res){
	//这里返回的是账户和密码
  
})
//这里是账户
document.getElementsByClassName('email-input')[0].defaultValue = "username"
document.getElementsByClassName('email-input')[0].value = "username"
document.getElementsByClassName('email-input')[1].defaultValue = "username"
document.getElementsByClassName('email-input')[1].value = "username"
//这里是密码
document.getElementsByClassName('password-input')[0].defaultValue = "password"
document.getElementsByClassName('password-input')[0].value = "password"
document.getElementsByClassName('password-input')[1].defaultValue = "password"
document.getElementsByClassName('password-input')[1].value ="password"
//模拟登陆
// Ajax.get("https://om.qq.com/userAuth/randomCode?email=ry13%40runyin22.club&relogin=1",function(res){
//   var res =  eval('(' + res + ')')
//   var tokens = res.data.token
//   var data = {email:"ry13@runyin22.club",pwd:"Runyinljj993",token:tokens}
//   Ajax.post("https://om.qq.com/userAuth/SignIn?relogin=1",data,function(res){

//   })
// })


