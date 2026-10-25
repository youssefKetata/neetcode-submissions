class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let n = position.length;
        // 1. Combine position and speed into pairs
        const cars = [];
        for (let i = 0; i < n; i++) {
            cars.push([position[i], speed[i]]);
        }

        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];

        for (let i = 0; i < n; i++) {
            let [pos, spd] = cars[i];
            let time = (target - pos) / spd;

            if (stack.length > 0 && time <= stack.at(-1)) {
                continue;
            } else {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
