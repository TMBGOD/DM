/* Symmenry() - Функция для нахождение элементов матрицы, симметричных главной диагонали, алгоритм заключается
в сравнении симметричных главное диагонали элементов, если мы находим не симметричный, значит такая матрица уже не будет
таковой
 */

function Symmetry(arg){
    var dimension = arg.length;
    for (var i = 0; i < dimension; i++){
        for (var j = 0; j < dimension; j++){
            if (i == j){
                continue;
            }
            if (arg[i][j] != arg[j][i]) {
                return "Нет";
            }
        }
    }
    return "Да";
}

/* Antisymmetry() - Функция для нахождение элементов матрицы, симметричных главной диагонали, но разных знаков, в нашем же
случае, не равных друг другу.
 */
function Antisymmetry(arg){
    var dimension = arg.length;
    for (var i = 0; i < dimension; i++){
        for (var j = 0; j < dimension; j++) {
            if (i == j){
                continue;
            }
            if (arg[i][j] == arg[j][i]) {
                return "Нет";
            }
        }
    }
    return "Да";
}

/* Skewsymmetry() - Функция для нахождение кососимметричности матрицы, в нашем случае таковой матрицей будет являться только
матрица, состоящая из нулей, так как кососимметрическая матрица - такая матрица, числа которой умножив на (-1) будет равна
исходной.
 */
function Skewsymmetry(arg){
    var dimension = arg.length;
    for (var i = 0; i < dimension; i++){
        for (var j = 0; j < dimension; j++) {
            if (arg[i][j] != 0 || arg[j][i] != 0) {
                return "Нет";
            }
        }
    }
    return "Да";
}

/* Areflectiveness() - Функция для нахождения антирефлексивности матрицы, проверяем, стоят ли на главной диагонали нули, если
да, то такая матрица антирефлексивна.
 */
function Areflectiveness(arg){
    var dimension = arg.length;
    var flag = 0
    for (var i = 0; i < dimension; i++){
        if (arg[i][i] != 0){
            flag = 1;
            break;
        }
    }
    if (flag){
        return "Нет";
    }
    else{
        return "Да";
    }
}

/* Reflexivity() - Функция для нахождения рефлексивности матрицы, проверяем, стоят ли на главной диагонали единицы, если
да, то такая матрица рефлексивна.
 */
function Reflexivity(arg){
    var dimension = arg.length;
    var flag = 0
    for (var i = 0; i < dimension; i++){
        if (arg[i][i] != 1){
            flag = 1;
            break;
        }
    }
    if (flag){
        return "Нет";
    }
    else{
        return "Да";
    }
}

/* Transitivity() - Функция для нахождения транзитивности матрицы, сначала возводим матрицу в квадрат, после чего смотрим,
все ли единицы матрицы возведенной в квадрат стоят на тех же местах, что стояли в начальной матрице, для этого реализовано
умножение матрицы (умножение строки на столбец) и последующая проверка.
 */
function Transitivity(arg){
    var dimension = arg.length;
    var arr = new Array(dimension);
    for (var i = 0; i < dimension; i++){
        arr[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++){
            arr[i][j] = 0;
        }
    }
    for (var i = 0; i < dimension; i++){
        for (var j = 0; j < dimension; j++){
            arr[i][j] += arg[j][i] * arg[i][j];
        }
    }
    for (var i = 0; i < dimension; i++){
        for (var j = 0; j < dimension; j++){
            console.log(arr[i][j] + " ");
        }
        console.log("\n");
    }
    for (var i = 0; i < dimension; i++){
        for (var j = 0; j < dimension; j++) {
            if (arr[i][j] == 1 && arg[i][j] != 1){
                return "Нет";
            }
        }
    }
    return "Да";
}

/* main() - Основная функция для вызова других функция и передачи параметров в html, также здесь происходит проверка,
является ли ввод правильным.
 */
function main() {
    dimension = document.getElementById("dimension").value;
    var a = document.getElementById("cin").value.replace(/\s+/g, " ").split(" ");
    var arr = new Array(dimension);
    for (var i = 0; i < dimension; i++){
        arr[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++){
            arr[i][j] = 0;
        }
    }
    console.log(a);
    if (a.length > 1) {
        if (a.length % 2 == 1) {
            confirm('Ошибка');
        }
        for (var i = 0; i < a.length; i += 2) {
            arr[a[i + 1] - 1][a[i] - 1] = 1;
        }
    }
    var cout = new String();
    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++) {
            cout += arr[i][j];
            cout += " ";
        }
        cout += "\n";
    }

    document.getElementById("cout").value = cout;
    document.getElementById("Symmetry").innerHTML = Symmetry(arr);
    document.getElementById("Antisymmetry").innerHTML = Antisymmetry(arr);
    document.getElementById("Reflexivity").innerHTML = Reflexivity(arr);
    document.getElementById("Areflectiveness").innerHTML = Areflectiveness(arr);
    document.getElementById("Skewsymmetry").innerHTML = Skewsymmetry(arr);
    document.getElementById("Transitivity").innerHTML = Transitivity(arr);
}