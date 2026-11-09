class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n = s1.length;
        const m = s2.length;
        if (n > m) return false;

        const A = "a".charCodeAt(0);
        const need = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        // Build counts for s1 and the first window of s2
        for (let i = 0; i < n; i++) {
            need[s1.charCodeAt(i) - A]++;
            window[s2.charCodeAt(i) - A]++;
        }

        const same = () => need.every((count, i) => count === window[i]);

        if (same()) return true;

        // Slide the window one character at a time
        for (let i = n; i < m; i++) {
            window[s2.charCodeAt(i) - A]++; // add the incoming character
            window[s2.charCodeAt(i - n) - A]--; // remove the outgoing character
            if (same()) return true;
        }

        return false;
    }
}
