
// 定义食物类
class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement ;

    constructor(){
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!  // 感叹👌声明不会为空 ;
    }

    // 设置变量限制等级

    // 获取到食物的X,Y坐标
    get X(){
        return this.element.offsetLeft
    }

    get Y(){
        return this.element.offsetTop
    }

    // 修改食物的位置

    change(){
        // 生成随机位置
        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格， 一格的大小就是10px，所以要求食物的作为必须为10倍数。

        let top =  Math.round(Math.random()* 29) * 10   // Math.random 生成0-1（0-29之间），
        let left = Math.round(Math.random()* 29) * 10

        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }

}

export default Food;