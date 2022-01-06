const allData = require('./allData.mock.json')
const ids = require('./ids.mock.json')


function erFenFind(id, arr){
  var left = 0; // 左指针
  var right = arr.length - 1 // 右指针

  while(left <= right){ // 当左指针大于或者等于右指针时，意味着指针重合也就是已经遍历了整个数组
    // 右移 （作用是用来取整）和 parseInt((left + right) / 2) 的结果一样
    // 或者用 ~~((left + right) / 2) 亦可
    var middle = (left + right) >>> 1 // 中间值指针索引
    // console.log('**middle:', middle, ' right:', right, ' left:', left)
    if(arr[middle] == id){
     // 当中间值等于查找目标时，直接返回中间值的索引
     return middle
    } else if(arr[middle] > id) {
     // 如果中间值大于目标值，右指针向左移动至中间值左侧一位
      right = middle - 1
    } else {
     // 如果中间值小于目标值，左指针向右移动至中间值右侧一位
      left = middle + 1
    }
    // console.log('right:', right)
    // console.log('left:', left)
  } 
return left
};