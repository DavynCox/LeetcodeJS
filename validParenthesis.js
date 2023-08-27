// {} [] ()
// we need a dictionary

const pairs = {
    "[": "]",
    "{": "}",
    "(": ")",
}

Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}

var isValid = function(s) {
    let stack = [];
    // We need to do a stack and a pairs dictionary
    if (s.length < 2) return false;
    for (let i = 0; i < s.length; i++) {
        if (pairs[s[i]] !== undefined) {
            stack.push(s[i])
        } else if (pairs.getKeyByValue(s[i]) === stack[stack.length - 1]) {
            stack.pop()
        } else {
            return false
        }
    }
    return true
};

// console.log("true", isValid("{([])}"));