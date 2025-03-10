function solution(genres, plays) {
    var answer = [];
    var song_map = new Map();
    var genres_map = new Map();
    var plays_map = new Map();
    var genres_sort = new Map();
    
    for(let i=0;i<genres.length;i++){
        genres_map.set(i,genres[i]);
        plays_map.set(i,plays[i]);
    }
    var plays_sort = [...plays_map.entries()].sort((a,b) => b[1] - a[1]).map(a => a[0]);
    
    for(let i=0;i<plays_sort.length;i++){
        if(genres_map.has(plays_sort[i])){
            genres_sort.set(plays_sort[i],genres_map.get(plays_sort[i]));
        }
    }
    
    for(let i=0;i<genres.length;i++){
        if(song_map.has(genres[i])){
            let value = song_map.get(genres[i]);
            song_map.set(genres[i],value + plays[i]);
        }else{
            song_map.set(genres[i],plays[i]);
        }
    }
    var entries = [...song_map.entries()].sort((a,b) => b[1]-a[1]).map(item => item[0]);
    var genres_arr = [...genres_sort.entries()];
    
    for(let i=0;i<entries.length;i++){
        let num = 0;
        for(let j=0;j<genres_arr.length;j++){
            if(entries[i] === genres_arr[j][1]){
                answer.push(genres_arr[j][0])
                num++;
            }
            if(num === 2) break;
        }
    }
    
    return answer;
}