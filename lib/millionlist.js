var MAX = 100000;
var MillionList = module.exports= function(){
    this.list = [];
}
MillionList.prototype.push = function(f){
    if( this.list.length === 0 ){
        this.list.push([]);
    }
    if(this.list[this.list.length - 1].length < MAX){
    }else{
        this.list.push([]);
    }
    this.list[this.list.length - 1].push(f);
}
MillionList.prototype.pop = function(count){
    var list = [];
    while(true){
        if(this.list.length === 0){
            break;
        }
        if(list.length === count){
            break;
        }
        list = list.concat(this.list[0].splice(0, count - list.length));
        if(this.list[0].length === 0){
            this.list.splice(0, 1);
        }
    }
    return list;
}
MillionList.prototype.length = function(){
    var length = 0;
    this.list.forEach(function(v){
        length += v.length;
    });
    return length;
}
if(!module.parent){
    var m = new MillionList();
    for(var i = 0; i<1000001; i++){
        m.push(i);
    }
    var update = function(){
        var list = m.pop(5000);
        if(list.length === 0) return;
        console.log(m.length());
        setTimeout(update, 0);
    }
    update();
}
