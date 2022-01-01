function add() {
  return Array.from(arguments).reduce((pre, cur) => pre + cur)
}

export default add