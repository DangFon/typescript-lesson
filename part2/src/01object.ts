/* 
 对象类型的定义
*/

let lqls: object;
lqls = {}
lqls = function (){

}

let a: object;
a  = {};
a = function (){
}

let haha2 : {name:string, age?:number} // ?表示不一定需要
haha2 = {name:'haha2',age:1}

let haha : {name:string,age?:number} 
haha = {name:'aaaa'}

let hahac : {name: string, [propName:string]: any}

hahac = {name:"猪八戒", age:18, gender:"男"}


let wc : (a:number,b:number ) => number

let wv: (a: HTMLDivElement, b: string) => string

wv = function (j11, ll1) {
    return j11 +ll1 
}



/**
 * @desciption function add up
 * @param {number} n1 
 * @param {string} [n2] 
 * @return {number} 
 */


/**
 * @description asad
 * @param n1 
 * @param n2 
 * @returns {number} n1+n2
 */
function a2s (n1:number, n2:number) {
    return n1 + n2 
}

let wa : (a:string, b:string) => number

wa = function (n3, n4) {
    return parseInt(n3+n4)
}


/**
 * 
 * Start 数组的类型声明
 * 两种形式
 * Array[tpye]
 * type[]
 */

// 形式1
let warray : Array<string>
warray = ["1","2","3","4"]

let owarry: Array<boolean>
owarry = [true, false, true, false]


// 形式2

let warray2 : number[]

warray2 = [1,2,3,4,5]


// end 数组


/**
 *  start 
 *  元组：固定长度的数组
 *  效率高，长度固定
 */

 let tuple: [string,string]
 tuple  = ["2",'2']

// end 

console.log(111)


 /**
  * Start 
  * enum 枚举
  * 
  */

  enum Gender1 {
      Male=0 ,
      Female=1    
  }

  let enuma : {name:string, gender: Gender1 }

  enuma = {
      name:"a孙",
      gender:Gender1.Male
  }
 
   console.log(enuma.gender===1)  


   let j11 : {name:string } &{age :number};

   j11 = {name:'sti', age:1}


   type nn1 = 1 | 2 | 3 | 4 | 5

   let m : nn1
   m=1
   

   import hhh from '../src/app'

   console.log(hhh+'1')