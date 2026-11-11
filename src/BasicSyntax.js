export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let index = 0;
    function sw(trs) {
        let v = 0;
        switch (trs) {
            case 'I':
                v = 1;
                break;
            case 'V':
                v = 5;
                break;
            case 'X':
                v = 10;
                break;
            case 'L':
                v = 50;
                break;
            case 'C':
                v = 100;
                break;
            case 'D':
                v = 500;
                break;
            case 'M':
                v = 1000;
                break;
        }
        return v;
    }
    while (str[index]) {
        let w = sw(str[index]);
        if (w < sw(str[++index])) {
            result -= w;
        } else {
            result += w;
        }
    }
    return result;
}
