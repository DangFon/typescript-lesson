/** 
 * 在定义函数或者是类时，如果遇到类型不明确的就可以使用泛型
*/

function fn<T>(a:T): T{
    return a 
}

let result = fn(10)
// 可以直接调用具有泛型的函数
let result2 = fn<string>('1')


function fn2<T, K>(a:T, b:K): T{
    return a 
}

fn2<number,string>(1,"2")

interface Inter{
    length: number;
}

// T extends 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number{
    return a.length;
}

fn3({length:10})

class Myclass<T> {
    name: T;
    constructor(name:T){
        this.name = name 
    }
}

const mc = new Myclass<string>('孙悟空')