class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const m = s1.length;
        const n = s2.length;

        if (m > n) return false;

        const sortedS1 = s1.split("").sort().join("");

        for (let start = 0; start <= n - m; start++) {
            const substring = s2.slice(start, start + m);
            const sortedSubstring = substring.split("").sort().join("");

            if (sortedSubstring === sortedS1) {
                return true;
            }
        }

        return false;
    }
}
