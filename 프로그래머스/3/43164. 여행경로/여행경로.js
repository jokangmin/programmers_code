function solution(tickets) {
    var answer = Array(tickets.length).fill("ZZZ");
    
    function dfs(now_visit, index, now_airport, visited){
        if(index === tickets.length){
            if (answer.length === 0 || now_visit.join("") < answer.join("")) {
                answer = [...now_visit];
            }
            return;
        }else{
            for(let i=0;i<tickets.length;i++){
                if(tickets[i][0] === now_airport && !visited[i]){
                    visited[i] = true;
                    now_visit.push(tickets[i][1]);
                    dfs(now_visit, index+1, tickets[i][1], visited);
                    visited[i] = false;
                    now_visit.pop();
                }
            }
        }
    }
    
    dfs(["ICN"] , 0, "ICN", Array(tickets.length).fill(false));
    
    return answer;
}