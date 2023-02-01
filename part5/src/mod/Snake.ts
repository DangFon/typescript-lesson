class Snake{

    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    body: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement ; 
        this.body = this.element.getElementsByTagName('div');
    }

    // 获取蛇的坐标（蛇头的坐标）
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }
    //  设置蛇的坐标
    set X(value:number){
        if (this.X === value) return
        // X的值合法范围0-290
        if(value<0 || value>290){
        throw new Error("蛇撞墙了")
         }
        this.moveBody()
        this.head.style.left = `${value}px`

    }

    set Y(value:number){
        if (this.Y === value) return
           // Y的值合法范围0-290
        if(value<0 || value>290){
            throw new Error("蛇撞墙了")
        }
        this.moveBody()
        this.head.style.top = `${value}px`

    }

    // 蛇增加身体的方法
    addBody(){
        // 向element添加ID
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }
    
    moveBody(){
        /**
         * @description
         *  举例子：
         *      第4节 = 第3节的位置
         *      第3节 = 第2节的位置
         *      第2节 = 蛇头的位置
         */

        for(let i=this.body.length-1;i>0;i--){
            // 获取前边身体的位置
            let x = (this.body[i-1] as HTMLElement).offsetLeft;
            let y = (this.body[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前的身体上
            (this.body[i] as HTMLElement).style.left = `${x}px`;
            (this.body[i] as HTMLElement).style.top = `${y}px`
        }
    }

}

export default Snake