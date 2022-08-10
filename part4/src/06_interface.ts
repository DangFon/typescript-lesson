(function(){
    
    // 描述一个对象的类型
    type myType = {
        name: string;
        age: number;
    };

    /**
     *  接口用来定一个类的结构,用来定义一个类中应该包含哪些属性和方法
     *  同时接口也可以当成类型声明去使用
     */

    interface myInterface{
        name: string,
        age: number
    }

    interface myInterface{
        gender:string,
    }

    /**
     *  接口可以在定义类的时候去限制类的结构
     *  接口中所有属性都不能有实际的值，不考虑实际值
     */

    interface myInter{
        name:string;
        sayHello():void
    }

    const obj: myInterface = {
        gender:'11',
        name:'11',
        age:1
    } 

    /**
     * 定义类时，可以使类去实现一个接口
     *  实现接口就是使类满足接口的需求
     *  接口实际上就是定义了一个规范，对一个类的限制
     */
    class Myclass implements myInter{
        name:string;
        constructor(name:string){
            this.name = name 
        }
        sayHello(){
            console.log("大家好")
        }
    }
    const class11 = new Myclass('ts lesson')
})();