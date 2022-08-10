// 使用Class关键字来定义一个类

class Person {

    /**
     * 直接定义的属性是实例属性，需要通过对象的实例去访问
     * 
     * const per = new Person(); 
     * per.name 
     * 
     *  使用 static开头的属性是静态属性（类属性），可以直接访问
     */
    readonly name: String = 'apptutti'; // 可以加readonly关键字表示只读，无法修改
    static age: number = 18;

    // 定义方法
    sayHello(){
        console.log('hello，大家好, 我是'+this.name)
    }
}

const per = new Person();

console.log(per.name)
console.log(Person.age)
per.sayHello()


