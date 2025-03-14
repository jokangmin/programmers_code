function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var bridge_truck = new Array(bridge_length).fill(0);
    
    while (bridge_truck.length > 0) {
        bridge_truck.pop();
        let now_weight = bridge_truck.reduce((a, total) => a + total, 0);

        if (truck_weights.length > 0) {
            let now_truck = truck_weights[0];

            if (now_weight + now_truck <= weight) { 
                bridge_truck.unshift(truck_weights.shift());
            } else {
                bridge_truck.unshift(0);
            }
        }
        answer++;
    }
    
    return answer;
}
