/* resf() - Функция для отправки результата в html.
 */
function resf(res){
    if (res){
        return "Да";
    }
    else{
        return "Нет";
    }
}

/* main() - Функция для ввода параметров, а также проверки на правильность ввода, ввод должен содержать прямоугольную
матрицу с заданными параметрами количества столбцов и строк.
 */
function main() {
    var a = document.getElementById("cin").value.split(" ");
    dimensionx = document.getElementById("dimensionx").value;
    dimensiony = document.getElementById("dimensiony").value;
    var n = 1;
    var m = 1;
    if (dimensionx == 1){
        a = document.getElementById("cin").value.replace(/\s+/g, " ").split(" ");
        if (a.length != dimensiony){
            confirm("Ошибка ввода");
            return 0;
        }
    }
    else {
        for (var i = 0; i < a.length; i++) {
            if (a[i].indexOf("\n") != -1 || a[i].indexOf("\n") == 1) {
                if (n != dimensionx || a[i].length != 3) {
                    confirm("Ошибка ввода");
                    return 0;
                } else {
                    n = 1;
                    m += 1;
                }
            }
            if (a[i] != "\n") {
                n += 1;
            }
        }
        if (m != dimensiony) {
            confirm("Ошибка");
            return 0;
        }
        if (n - 1 != dimensionx) {
            confirm("Ошибка");
            return 0;
        }
        a = document.getElementById("cin").value.replace(/\s+/g, " ").split(" ");
        for (var i = 0; i < a.length; i++) {
            if (a[i] != "1" && a[i] != "0") {
                confirm("Ошибка");
                return 0;
            }
        }
    }
    console.log(dimensionx, dimensiony, a);
    var buf = 0;
    var arr = new Array(dimensiony);
    for (var i = 0; i < dimensiony; i++){
        arr[i] = new Array(dimensionx);
        for (var j = 0; j < dimensionx; j++){
            arr[i][j] = a[buf];
            buf++;
        }
    }
    var res = 0;
    var sum = 0;
    var flag = 1;
    console.log(arr);
    //Проверка, является ли отношение функция, в каждом множестве должен быть только 1 элемент.
    for (var i = 0; i < dimensiony; i++){
        sum = 0;
        for (var j = 0; j < dimensionx; j++){
            if (arr[i][j] === "1") {
                sum += 1;
            }
        }
        console.log(sum);
        if (sum !== 1){
            res = 0;
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        res = 1;
    }
    document.getElementById("Res").innerHTML = resf(res);
}