var yourCode = {
  commafy: function(n) {
    var str='';
    for(var i=1;i<n;i++){
      str+=i+',';
    }
    return str+n;
  },

  joinToString: function(array) {
    var str='';
    for(var i=0;i<array.length-1;i++){
      str+=array[i]+' and ';
    }
    str+=array[array.length-1]+' oh my.';
    return str;
  },

  printBracketedNumbers: function(num){
    var str = '';
    for(var i=0;i<=num;i++){
      str+='['+i+']';
    }
    return str;
  },

  sumOfN: function(num){
    var sum=0;
    for(var i=1;i<=num;i++)
      sum+=i;
    return sum;
  },

  moviesFor: function(name){
    switch(name){
      case "Robin Williams": return "Jumanji, Hook, Good Will Hunting";
      case "Sandra Bullock": return "Gravity, The Lake House, The Blind Side";
      case "Daniel Radcliffe": return "All of the Harry Potters";
      default: return "Please provide an actor or actress";
    }
  },

  joinWithForAndIndex: function(array,token){
    var str='';
    for(var i=0;i<array.length;i++){
      str+=array[i]+i;
    }
    return str;
  }

  joinWithForAndToken: function(array){
    var str='';
    for(var i=0;i<array.length-1;i++){
      str+=array[i]+token;
    }
    return str+array[array.length-1];
  }
};

module.exports = yourCode;