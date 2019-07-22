function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r= window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]);return null;
}

//////////////////////////hover on demo//////////////////////////////
(function() {
     function getQueryStr(name)
     {
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r= window.location.search.substr(1).match(reg);
          if(r!=null)return  unescape(r[2]);return null;
     }
  //var demoItems = document.querySelectorAll('.grid-item')
     alert(getQueryStr("name"));
}());
 
// 调用方法
alert(GetQueryString("name"));
