class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const output = Array.from({ length: temperatures.length }, () => 0);
        const index = Array.from({ length: temperatures.length }, () => 0);

        for (let i = 0; i < temperatures.length; i++) {
            if (index.length === 0) {
                index.push(i);
            } else {
                let hIndex = index.at(-1);
                while (temperatures[i] > temperatures[hIndex]) {
                    let length = i - hIndex;
                    output[hIndex] = length;
                    index.pop();
                    hIndex = index.at(-1);
                }
                index.push(i);
            }
        }
        return output;
    }
}
