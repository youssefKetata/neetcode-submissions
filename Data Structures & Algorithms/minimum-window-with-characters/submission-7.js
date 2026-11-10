class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0 || s.length < t.length) return "";

        const need = new Map();
        const window = new Map();

        // Count the characters we need.
        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let have = 0;
        const required = need.size;

        let left = 0;
        let minLength = Infinity;
        let minStart = 0;

        for (let right = 0; right < s.length; right++) {
            const incoming = s[right];

            // Add the incoming character to the window.
            if (need.has(incoming)) {
                window.set(incoming, (window.get(incoming) || 0) + 1);

                if (window.get(incoming) === need.get(incoming)) {
                    have++;
                }
            }

            // While the window is valid, try to make it smaller.
            while (have === required) {
                const length = right - left + 1;

                if (length < minLength) {
                    minLength = length;
                    minStart = left;
                }

                const outgoing = s[left];

                if (need.has(outgoing)) {
                    // Removing this character may make the window invalid.
                    if (window.get(outgoing) === need.get(outgoing)) {
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
