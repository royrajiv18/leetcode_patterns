const lengthOfLastWord = (s)=> {
    let count = 0;
    s = s.trim();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            count++
        }
        else {
            return count;
        }
    }
    return count;
};
// s = '   hello  world  ' // 5