(function(){
    // 定义一个表示人的类
    class Person {
        // Ts 可以在属性前添加数据的修饰符
        /**
         * public 修饰的属性可以在任意位置访问（修改）默认值
         * private 私有属性，私有属性智能在类内部进行访问（修改）
         * 
         */
        private name: string;
        age:number;
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
    }
    const per = new Person('孙悟空',10);
    /**
     * 现在属性是在对象中设置的，属性可以被任意的修改
     * 属性可以任意被修改将会导致对象中的数据变得非常不安全
     */
    Person.name = "猪八戒"
    per.age = 38;
    console.log(per)
})();