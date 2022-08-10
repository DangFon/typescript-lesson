/**
 *  抽象类
 */

 /**
  *  以 abstract 开头的类是抽象类
  *     抽象类和其他类区别不大，只是不能用来创建对象
  *     抽象类就是专门用来被继承的类 
  * 
  *     抽象类可以添加抽象方法
  *     
  */

abstract class Phone{
    name: string;
    constructor(name:string){
        this.name = name
    }

    /**
     * 定一个抽象方法
     * 抽象方法用abstract开头，没有方法体
     * 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
     */
    abstract sayHello():void;
}


class Xiaomi extends Phone {
    sayHello(){
        console.log('i am 小爱同学')
    }
}

class Huawei extends Phone {
    sayHello(){
        console.log('i am harmouns')
    }
}

const xiaomi = new Xiaomi('xiaom 11 ultra')

const huawei = new Huawei('huawei mate 50')

console.log(xiaomi)
xiaomi.sayHello()
console.log(huawei)
huawei.sayHello()