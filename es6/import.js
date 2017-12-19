import {Fun} from "./export";
class Name extends Fun{
    isSuccess(){
        alert('yes 继承成功1');
    }
}
var name =new Name();
name.isSuccess();