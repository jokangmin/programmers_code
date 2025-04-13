function solution(s) {
    var count = 0;
    var num = 0;
    var len = s.length;
    var arr = s.split('');

    while(num < len){
        var depth = [];
        var toggle = false;

        for (var i = 0; i < arr.length; i++) {
            var c = arr[i];

            if (c === '(') {
                depth.push(')');
            } else if (c === '[') {
                depth.push(']');
            } else if (c === '{') {
                depth.push('}');
            } else {
                if (depth.length === 0 || depth.pop() !== c) {
                    toggle = true;
                    break;
                }
            }
        }

        if (!toggle && depth.length === 0) {
            count++;
        }

        var first = arr.shift();
        arr.push(first);
        num++;
    }

    return count;
}
