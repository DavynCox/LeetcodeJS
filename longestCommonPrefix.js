// Full disclosure I cheated on this one
var longestCommonPrefix = function (strs) {
    let tempPrefix = "";
    let prefix = strs[0];
    for (var i = 0; i < strs.length; i++) {
     while (strs[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length - 1)
     }
    }
    return prefix;
  };
