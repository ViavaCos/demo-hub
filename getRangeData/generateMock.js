function getMockData(num) {
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const res = {}

  for (let i = 0; i < num; i++) {
    let randomNum = getRandomNum(0, 26)
    if(!res[keys[randomNum]]) res[keys[randomNum]] = []
    res[keys[randomNum]].push({
      id: i,
      text: keys[getRandomNum(0, 26)] + keys[getRandomNum(0, 26)] + keys[getRandomNum(0, 26)]
    })
  }

  return res
}

function getRandomNum(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

// 生成allData.mock.json的数据
// console.log(JSON.stringify(getMockData(60000)));

function getIds(num) {
  let ids = []
  for (let i = 0; i < num; i++) {
    ids.push(i)
  }
  return ids
}

// 生成ids.mock.json的数据
// console.log(JSON.stringify(getIds(5000)));