class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // [7, 4, 1 ,0]  [1,2,2,1] [3, 3, 4.5, 10]
        let cars = [];
        let n = position.length;
        let times = [];

        for (let i = 0; i < n; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);
        let stack = [];
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
