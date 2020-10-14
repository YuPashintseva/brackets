module.exports = function check(str, bracketsConfig) {
    let map = new Map();
    var stack = [];
    var openBr = [];
    var closeBr = [];
    for (let i=0; i<bracketsConfig.length; i+=1) {
      map.set(bracketsConfig[i][1],bracketsConfig[i][0]);
      openBr.push(bracketsConfig[i][0]);
      closeBr.push(bracketsConfig[i][1]);
    }
    for(let s=0; s<str.length; s+=1) {
      if (openBr.indexOf(str[s]) !== -1 && closeBr.indexOf(str[s]) !== -1) {
        if (stack[stack.length-1] === str[s]) {
          stack.pop();
        } else {
          stack.push(str[s]);
        }
      } else {
        if (openBr.indexOf(str[s]) !== -1) {
          stack.push(str[s]);
        } else {
          var lastel = stack[stack.length-1];
          if (map.get(str[s]) === lastel) {

            stack.pop();
          } else {
            return false;
          }
          
        }
      }
    }
  
    if (stack.length === 0) {
      return true;
    }
    return false;
    
  }


