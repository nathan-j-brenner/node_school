module.exports = function(arr, fn, init){
  var value;
  if (!arr.length) return value;
  var head = arr.[0];
  value += fn(head);
  arr.slice(0, 1);
}
