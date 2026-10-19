class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // 4#word
        let result = "";
        for (let str of strs) {
            result = result + str.length + "#" + str;
        }
        console.log("encode", result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let l = "";
        const result = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "#") {
                i++;
                let w = str.substring(i, parseInt(l, 10) + i);
                result.push(w);
                i = i + parseInt(l, 10);
                l = "";
                console.log("i", i, "l", l);
            }
            l = l + str[i];
        }
        return result;
    }
}
