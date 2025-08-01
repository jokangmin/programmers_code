SELECT 
    U.USER_ID,
    U.NICKNAME,
    CONCAT(U.CITY, ' ', U.STREET_ADDRESS1, ' ', IFNULL(U.STREET_ADDRESS2, '')) AS 전체주소,
    CONCAT(
        SUBSTRING(U.TLNO, 1, 3), '-', 
        SUBSTRING(U.TLNO, 4, 4), '-', 
        SUBSTRING(U.TLNO, 8)
    ) AS 전화번호
FROM USED_GOODS_USER U
JOIN (
    SELECT WRITER_ID
    FROM USED_GOODS_BOARD
    GROUP BY WRITER_ID
    HAVING COUNT(*) >= 3
) B ON U.USER_ID = B.WRITER_ID
ORDER BY U.USER_ID DESC;
