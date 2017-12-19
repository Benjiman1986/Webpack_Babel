class Fun {
    constructor(){
        this.name = [];
    };
    get CurrentName(){
        if(this.name.length == 0){
            return '未添加姓名';
        }else{
             return function* (){
                for(var value of this.name){
                    yield value;
                }
                return '遍历完成1';
            }
        }
    };
    set CurrentName(name){
        this.name.push(name);
    };
}
export {Fun};