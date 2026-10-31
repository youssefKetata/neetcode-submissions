class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // 1. Remove all non-alphanumeric characters and convert to lowercase
        const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        // 2. Reverse the cleaned string
        const reversedStr = cleanStr.split('').reverse().join('');
        
        // 3. Check if they are exactly the same
        return cleanStr === reversedStr;
    }
}
