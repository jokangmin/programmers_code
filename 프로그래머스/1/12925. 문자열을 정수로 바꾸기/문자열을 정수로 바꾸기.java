class Solution {
    public int solution(String s) {
        int answer = 0;
        boolean isNegative = false;
        int start = 0;

        if (s.charAt(0) == '-') {
            isNegative = true;
            start = 1;
        } else if (s.charAt(0) == '+') {
            start = 1;
        }

        for (int i = start; i < s.length(); i++) {
            char sh = s.charAt(i);
            if (sh < '0' || sh > '9') {
                throw new NumberFormatException("no char: " + sh);
            }

            answer = answer * 10 + (sh - '0');
        }

        return isNegative ? -answer : answer;
    }
}
