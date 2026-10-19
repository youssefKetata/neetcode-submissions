class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grouped = new Map();
        for (let str of strs) {
            let k = str.split("").sort().join("");
            if (grouped.has(k)) {
                grouped.get(k).push(str);
            } else {
                grouped.set(k, [str]);
            }
        }
        return Array.from(grouped.values());
    }
}
