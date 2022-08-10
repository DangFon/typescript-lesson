class Dog {
    name : string;
    age: number;
    // 构造函数会在对象创建时调用 使用New关键字时
    constructor(name:string,age:number){
        // 在实例方法中,this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的对象
        // 可以通过this向新建的对象中添加属性
        console.log('构造函数执行')
        this.name = name
        this.age = age
    }

    bark(){
        alert(this.name)
    }
}

const dog = new Dog('waicai',12);
console.log(dog)
dog.bark()