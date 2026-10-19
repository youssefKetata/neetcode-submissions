class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            result = result + str + "~";
        }
        // console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let w = "";
        for (let s of str) {
        console.log(s);
            if (s === "~") {
                result.push(w);
                w = "";
            } else {
                w = w + s;
            }
        }
        return result;
    }
}
