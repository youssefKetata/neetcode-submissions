class Solution {
    largestRectangleArea(heights) {
        let stack = []; 
        let n = heights.length;
        let maxArea = 0;
        
        // Fix Bug 3: Append a 0 to flush out the stack at the end
        const h = [...heights, 0]; 

        for (let i = 0; i < h.length; i++) {
            let currentValue = h[i];

            // Fix Bug 1: While stack is not empty AND the top of the stack is TALLER than current
            while (stack.length > 0 && h[stack.at(-1)] > currentValue) {
                let topIndex = stack.pop();
                let height = h[topIndex];
                
                // Fix Bug 2: Correct left boundary using the new stack top
                let leftBoundary = stack.length === 0 ? -1 : stack.at(-1);
                let width = i - leftBoundary - 1;
                
                let area = width * height;
                maxArea = Math.max(maxArea, area);
            }
            stack.push(i);
        }
        return maxArea;
    }
}