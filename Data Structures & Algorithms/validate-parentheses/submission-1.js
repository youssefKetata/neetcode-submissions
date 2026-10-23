class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let c of s) {
            console.log(stack);
            if (c === "(" || c === "[" || c === "{") {
                stack.push(c);
            } else {
                if (c === "}") {
                    if (stack.at(-1) === "{") {
                        stack.pop();
                    } else {
                        return false;
                    }
                }
                if (c === "]") {
                    if (stack.at(-1) === "[") {
                        stack.pop();
                    } else {
                        return false;
                    }
                }
                if (c === ")") {
                    if (stack.at(-1) === "(") {
                        stack.pop();
                    } else {
                        return false;
                    }
                }
            }
        }
        return stack.length === 0;
    }
}
