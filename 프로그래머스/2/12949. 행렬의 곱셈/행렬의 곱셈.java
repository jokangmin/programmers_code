class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int row = arr1.length;
        int col = arr2[0].length;
        int common = arr1[0].length;
        
        int[][] answer = new int[row][col];
        
        for(int a=0;a<row;a++){
            for(int b=0;b<col;b++){
                for(int c=0;c<common;c++){
                    answer[a][b] += arr1[a][c] * arr2[c][b];
                }
            }
        }
        return answer;
    }
}