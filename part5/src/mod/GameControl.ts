import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类

class GameControl{
    // 蛇
    snake : Snake;
    // 食物
    food : Food;
    // 计分牌
    scorePanel: ScorePanel;
    // 按键方向
    direction: string = 'Right';
    // 游戏是否结束
    isLive: boolean = true

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.isLive = this.isLive
        this.init()
    }

    init(){
        // 绑定键盘的按下的事件
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        
        // 调用run方法，使蛇移动
        this.run();
    }

    // 创建一个键盘按下的响应函数
    keyDownHandler(event: KeyboardEvent){
        console.log(event.key)
        // 检查event.key 是否合法
        this.direction = event.key
    }

    // 
/**
 * @description 创建控制蛇移动的方法
 *              根据方向(this.direction)来使蛇的位置改变
 *              向上 top 减少
 *              向下 top 增加
 *              向左 left 减少
 *              向右 right 增加
 * @memberof GameControl
 */
run(){
    if (!this.isLive) return
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来修改X.Y值
    switch(this.direction){
        case "ArrowUp":
        case "Up":
            // 向上移动
            Y -= 10;
            break;
        case "ArrowDown":
        case "Down":
            Y += 10;
            break;
        case "ArrowLeft":
        case "Left":
            X -= 10;
            break;
        case "ArrowRight":
        case "Right":
            X += 10;
            break;
    }
    
    // 检查是否吃到食物
    this.checkEat(X,Y)

    try{
        this.snake.X = X;
        this.snake.Y = Y;
    }catch(e:any){
        alert(e.message)
        this.isLive = false
    }
    setTimeout(this.run.bind(this), 300 - (this.scorePanel.level- 1)*30 )
}

// 定义一个方法，用来检查蛇是否吃到食物
checkEat(X:number, Y:number){
    if(X===this.food.X && Y===this.food.Y){
        // 食物的位置要进行重置
        this.food.change()
        // 分数增加
        this.scorePanel.addScore()
        // 身体增加
        this.snake.addBody()
    }
}
}

export default GameControl;