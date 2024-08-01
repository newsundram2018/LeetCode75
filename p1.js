/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Helper function to determine if str1 can be constructed by repeating str2
    function isDivisible(s, t) {
        if (s.length % t.length !== 0) {
            return false;
        }
        return t.repeat(s.length / t.length) === s;
    }
    
    // Find the GCD of the lengths of the two strings
    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    
    const gcdLength = gcd(str1.length, str2.length);
    const candidate = str1.slice(0, gcdLength);
    
    if (isDivisible(str1, candidate) && isDivisible(str2, candidate)) {
        return candidate;
    }
    return "";

};
