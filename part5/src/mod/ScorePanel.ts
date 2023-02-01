// 计分牌的类

class ScorePanel{
    score = 0;
    level = 1;

    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number;

    //设置多少分时升级
    upScore: number 

    constructor(maxLevel: number = 100, upScore:number = 2){
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore
    }

    // 设置加分的方法

    addScore(){
        this.scoreElement.innerHTML = `${++this.score}`;
        // 判断分数为多少
        if (this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    levelUp(){
        if(this.level < this.maxLevel){
            this.levelElement.innerHTML = `${++this.level}`;
        }
    }
}

export default ScorePanel;