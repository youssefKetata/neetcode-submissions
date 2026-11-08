class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // get unuque chars
        let uniqueCh = new Set(Array.from(s));
        let output = 0;
        for (let ch of uniqueCh) {
            let start = 0;
            let end = 0;
            let score = k;
            while (end < s.length) {
                if (s[end] == ch) {
                    end++;
                } else {
                    if (score > 0) {
                        score--;
                        end++;
                    } else {
                        if (s[start] !== ch) score++;
                        start++;
                    }
                }
                output = Math.max(output, end - start);
            }
        }
        return output;
    }
}
