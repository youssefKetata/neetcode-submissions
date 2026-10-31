class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        function isAlphanumeric(char) {
            const code = char.charCodeAt(0);
            return (
                (code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)
            );
        }

        while (left <= right) {
            while (left < right && !isAlphanumeric(s[left])) {
                left++;
            }
            while (left < right && !isAlphanumeric(s[right])) {
                right--;
            }
            console.log(s[left], s[right]);
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
