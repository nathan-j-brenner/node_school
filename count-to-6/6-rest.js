module.exports = (...args)=>{
  let sum = args.reduce((a,b)=>a+b, 0);
  return sum/args.length
}
