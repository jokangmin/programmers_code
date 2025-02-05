function solution(common) {
    var state = common[common.length-1] - common[common.length-2] === common[common.length-2] - common[common.length-3] ? "등차" : "등비";
    return state === "등차" ? 
        common[common.length-1] + (common[common.length-1] - common[common.length-2]) : 
        common[common.length-1] * (common[1] / common[0]);
}