// brackets should be in order and valid
const isValid = (s)=> {
    const mapList = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            if (mapList[char] !== stack.pop()) {
                return false
            }
        }
    }
    return stack.length === 0
};