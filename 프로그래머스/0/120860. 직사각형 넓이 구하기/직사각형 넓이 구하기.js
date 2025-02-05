function solution(dots) {
    var x = dots.map(dot => dot[0]);
    var y = dots.map(dot => dot[1]);

    var width = Math.max(...x) - Math.min(...x);
    var height = Math.max(...y) - Math.min(...y);

    return width * height;
}
