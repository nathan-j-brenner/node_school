module.exports = function getShortMessages(messages){
  return messages.filter((object)=>{
    return object.message.length < 50;
  }).map((object)=>{
    return object.message;
  });
}
