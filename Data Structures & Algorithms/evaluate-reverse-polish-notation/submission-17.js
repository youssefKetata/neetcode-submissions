class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const mathOperations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };
        const stack = [];
        for (let token of tokens) {
            let isNumber = !Number.isNaN(+token);
            if (isNumber) {
                stack.push(parseInt(token, 10));
            } else {
                let b = stack.pop();
                let a = stack.pop();
                let result = mathOperations[token](a, b);
                stack.push(result);
            }
        }
        return stack[0];
    }
}
