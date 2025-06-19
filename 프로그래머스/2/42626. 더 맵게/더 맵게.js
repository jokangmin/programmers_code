class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    pop() {
        if (this.heap.length <= 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2;
            let smallest = i;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for (let s of scoville) heap.push(s);

    let count = 0;
    while (heap.size() > 1 && heap.peek() < K) {
        const min1 = heap.pop();
        const min2 = heap.pop();
        heap.push(min1 + min2 * 2);
        count++;
    }

    return heap.peek() >= K ? count : -1;
}
