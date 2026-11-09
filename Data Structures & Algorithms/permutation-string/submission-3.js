class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n = s2.length;
        const m = s1.length;

        if (m > n) return false;

        const sortedS1 = s1.split("").sort().join("");

        for (let i = 0; i <= n - m; i++) {
            let sorted = s2
                .slice(i, i + m)
                .split("")
                .sort()
                .join("");

            if (sorted === sortedS1) {
                return true;
            }
        }
        return false;
    }
}
