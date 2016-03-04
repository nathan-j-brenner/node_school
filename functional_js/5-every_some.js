module.exports = function(goodUsers){
  return function(submittedUsers){
    return submittedUsers.every((submittedUser)=>{
      return goodUsers.some((goodUser)=>{
        return goodUser.id === submittedUser.id;
      });
    });
  };
}
