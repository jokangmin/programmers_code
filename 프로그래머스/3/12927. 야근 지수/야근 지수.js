class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    
    push(value) {
        this.heap.push(value);
        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2);
        
        while (parent > 0 && this.heap[parent] < this.heap[current]) {
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
            current = parent;
            parent = Math.floor(current / 2);
        }
    }
    
    pop() {
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();
        
        const max = this.heap[1];
        this.heap[1] = this.heap.pop();
        let current = 1;
        let left = current * 2;
        let right = current * 2 + 1;
        
        while (
            (this.heap[left] && this.heap[current] < this.heap[left]) ||
            (this.heap[right] && this.heap[current] < this.heap[right])
        ) {
            if (!this.heap[right] || this.heap[left] > this.heap[right]) {
                [this.heap[current], this.heap[left]] = [this.heap[left], this.heap[current]];
                current = left;
            } else {
                [this.heap[current], this.heap[right]] = [this.heap[right], this.heap[current]];
                current = right;
            }
            left = current * 2;
            right = current * 2 + 1;
        }
        return max;
    }
}

function solution(n, works) {
    const maxHeap = new MaxHeap();
    for (let work of works) {
        maxHeap.push(work);
    }
    
    while (n > 0) {
        const max = maxHeap.pop();
        if (max <= 0) break;
        maxHeap.push(max - 1);
        n--;
    }

    return maxHeap.heap.reduce((acc, val) => acc + (val ? val * val : 0), 0);
}
