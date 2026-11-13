class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";
        const need = new Map();
        const window = new Map();
        let require = 0;
        let have = 0;
        let left = 0;
        let minLength = Infinity;
        let minStart = 0;
        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        require = need.size;
        for (let right = 0; right < s.length; right++) {
            let incoming = s[right];
            if (need.has(incoming)) {
                window.set(incoming, (window.get(incoming) || 0) + 1);
                if (window.get(incoming) === need.get(incoming)) {
                    have++;
                }
            }

            while (have === require) {
                let length = right - left + 1;
                if (length < minLength) {
                    minLength = length;
                    minStart = left;
                }

                let outgoing = s[left];
                if (need.has(outgoing)) {
                    if (need.get(outgoing) === window.get(outgoing)) {
                        have--;
                    }
                    window.set(outgoing, window.get(outgoing) - 1);
                }
                left++;
            }
        }

        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
