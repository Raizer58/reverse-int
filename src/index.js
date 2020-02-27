module.exports = function reverse (n) {
    n = String(Math.abs(n)).split("");
  
    const midNumber = n.splice(Math.floor(n.length)/2,1);
  
    n.reverse().splice(n.length/2,0,midNumber);
  
    return Number(n.join(""))
  }
