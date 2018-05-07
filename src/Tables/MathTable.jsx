/**
 * 
 * @param {源数据} data 
 * @param {每页的条数} number
 * 返回一个多维数[[][][][]] 
 */
function MathArray(data, number){
    let counts = 0;//计数  每到特定数字就反会
    let arrCounts = 0;//二维数组的标记 每循环number次就 + 1
    let arr = []
    for(let i = 0;i < number; i ++){
        arr[i] = []
    }
    for(let i = 0; i < data.length; i ++){
        if(counts < number){
            arr[arrCounts].push(data[i])
            counts ++ 
        }else{
            arrCounts ++;
            counts = 0;
        }
    }
    return arr
}

export {MathArray}