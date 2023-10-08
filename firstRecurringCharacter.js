// For my DSA Course

// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
// It should return 1

// Given an array = [2, 3, 4, 5]:
// It should return undefined

function firstRecurringCharacter(arr) {
    if (!arr.length) return;
    if (arr.length === 1) return arr[0]

    const recurrMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (recurrMap.get(arr[i])) return arr[i];
        recurrMap.set(arr[i], true)
    }
    return undefined;
}


console.log(firstRecurringCharacter([2, 3, 4, 5]));