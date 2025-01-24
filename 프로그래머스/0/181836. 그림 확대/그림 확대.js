function solution(picture, k) {
    var answer = [];
    for(let i = 0;i<picture.length;i++){
        var pic_data = picture[i].split('');
        var pic_data2 = [];
        for(let j = 0;j<pic_data.length;j++){
            for(let a =0;a<k;a++){
                pic_data2.push(pic_data[j]);
            }
        }
        picture[i] = pic_data2.join('');
    }
    for(let i =0;i<picture.length;i++){
        for(let j =0;j<k;j++){
            answer.push(picture[i]);
        }
    }
    
    return answer;
}