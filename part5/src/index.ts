import './style/index.less';


// 定义食物类
class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement ;

    constructor(){
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!  // 感叹👌声明不会为空 ;
    }

    // 获取到食物的X,Y坐标
    get X(){
        return this.element.offsetLeft
    }

    get Y(){
        return this.element.offsetTop
    }

    // 修改食物的位置

    change(){
        //生成随机位置
        
        this.element.style.left = '80px'
        this.element.style.top = '180px'
    }

}

const food = new Food()

console.log(food.X, food.Y)

food.change()