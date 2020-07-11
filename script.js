
var arr=data;
var butt=document.getElementById('butt');
var res=document.getElementById('res');
var inpu=document.getElementById('in');
function result(roll){
    for(i in arr){
        if(arr[i][2]==roll){
            res.innerText="Your rank is "+(parseInt(i)+1).toString();
            return;
        }
    }
    res.innerText="No such number exists";
    return ;
}
butt.onclick=function(){
    var rollnum=inpu.value;
    result(rollnum);
}
