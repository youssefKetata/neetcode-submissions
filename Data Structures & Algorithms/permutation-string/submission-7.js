class Solution {
    checkInclusion(s1, s2) {
        const n = s1.length;
        if (n > s2.length) return false;

        const need = new Map();
        const window = new Map();

        // Count s1 and the first window of s2.
        for (let i = 0; i < n; i++) {
            need.set(s1[i], (need.get(s1[i]) || 0) + 1);
            window.set(s2[i], (window.get(s2[i]) || 0) + 1);
        }

        const same = () => {
            if (need.size !== window.size) return false;

            for (const [char, count] of need) {
                if (window.get(char) !== count) return false;
            }

            return true;
        };

        if (same()) return true;

        for (let i = n; i < s2.length; i++) {
            const incoming = s2[i];
            const outgoing = s2[i - n];

            // Add the incoming character.
            window.set(incoming, (window.get(incoming) || 0) + 1);

            // Remove the outgoing character.
            window.set(outgoing, window.get(outgoing) - 1);
            if (window.get(outgoing) === 0) {
                window.delete(outgoing);
            }

            if (same()) return true;
        }

        return false;
    }
}
