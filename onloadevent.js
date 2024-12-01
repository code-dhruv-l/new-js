var body=document.getElementById("body");
var btn=document.getElementById("btn");

btn.onclick=function(){
    if(body.className=="black"){
        body.className="white";
        btn.className="black";
    }else{
        body.className="black";
        btn.className="white";
    }

}