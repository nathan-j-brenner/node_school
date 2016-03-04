function countWords(arr){
  return arr.reduce((countMap, word)=>{
    countMap[word] = ++countMap[word] || 1
    return countMap;
  }, {})
}
module.exports = countWords
