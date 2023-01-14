

var isPalindrome = function(x) {
    const fuck = x.toString();
    let shit = "";
    for (var i = fuck.length - 1; i >= 0; i--) {
        shit += fuck[i];
    }
    if (fuck === shit) {
        return true
    } else {
        return false
    }
};
