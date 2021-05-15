
/* aset() - Функция для убирания повторяющихся элементов во вводе, делает из массива что-то похожее на реальное
множество.
 */
function aset(a){
    var b = [];
    for (var i = 0; i < a.length; i++){
        if (b.indexOf(a[i]) === -1){
            b.push(a[i]);
        }
    }
    return b;
}

/* vvod() - Функция, в которой происходит ввод данных, здесь берутся данные введенные пользователем, после чего, прове-
ряются на ошибки, если такие имеются, то выводит false.
 */
function vvod(){
    var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" ");
    var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" ");

    for(var i = 0; i < arr1.length; i++){
        if(arr1[i].length > 4 || arr1[i].length < 4){
            alert("Неверно введен " + number(i + 1) + " элемент в 1 множестве");
        }
        if(!((arr1[i][0] >= 'а' && arr1[i][0] <= 'я') && (arr1[i][1] >= 0 && arr1[i][1] <= 9) && (arr1[i][2] % 2 === 0) && (arr1[i][3] % 2 === 0))){
            alert("Неверно введен " + Number(i + 1) + " элемент в 1 множестве");
            return false;
        }
    }
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i].length > 4 || arr2[i].length < 4){
            alert("Неверно введен " + Number(i + 1) + " элемент во 2 множестве");
        }
        if(!((arr2[i][0] >= 'а' && arr2[i][0] <= 'я') && (arr2[i][1] >= 0 && arr2[i][1] <= 9) && (arr2[i][2] % 2 == 0) && (arr2[i][3] % 2 == 0))){
            alert("Неверно введен " + Number(i + 1) + " элемент во 2 множестве");
            return false;
        }
    }
    return true;
}


/* union() - Функция для объединения множеств, так как мы убираем повторения с помощью aset(), то нам лишь нужно,
закинуть в одно из множеств другое множество, также, чтобы не было повторений, для это используется функция
indexOf(), которая находит первое повторение элемента, если такое имеется, то мы не закидываем элемент из одно множества
в другое.
 */
function union(){
    if (vvod()) {
        var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" ");
        var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" ");
    }
    arr1 = aset(arr1).slice();
    arr2 = aset(arr2).slice();
    var arr = [];
    for (var i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) === -1){
            arr2.push(arr1[i]);
        }
    }
    document.getElementById("union").innerHTML = arr2;
}

/* complement() - Функция, которая реализует дополнение (отрицание) двух множеств - в дополнительно созданный массив
arr закидываются элементы, которых нет во втором множестве, то есть те, которые не были найдены с помощью функции
indexOf().
 */
function complement(){
    if (vvod()) {
        var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" ");
        var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" ");
    }
    arr1 = aset(arr1).slice();
    arr2 = aset(arr2).slice();
    var arr = [];
    for (var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
            arr.push(arr1[i]);
        }
    }
    document.getElementById("complement").innerHTML = arr;
}

/* Complement() - Функция для пересечения множеств, здесь, с помощью функции indexOf() происходит поиск похожих элементов
в двух массивах, если такое находится, то такой элемент кидается в результирующий допольнительный массив, он же и
выводится.
 */
function intersection(){
    if (vvod()) {
        var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" ");
        var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" ");
    }
    arr1 = aset(arr1).slice();
    arr2 = aset(arr2).slice();
    var arr = [];
    var z = 0;
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr[z] = arr1[i];
                z++;
            }
        }
    }
    document.getElementById("intersection").innerHTML = arr;
}

/* difference() - Функция, реализующая симметричесекую разность, для начала она находит одинаковые элементы в обоих
множествах и закидывает их в буферный массив arr, после чего, с помощью двух циклов происходит поиск элементов в двух
множествах, которых нет в массиве arr и закидываются в результирующий массив res.
 */
function difference(){

    if (vvod()) {
        var arr1 = document.getElementById("arr1").value.replace(/\s+/g, " ").split(" ");
        var arr2 = document.getElementById("arr2").value.replace(/\s+/g, " ").split(" ");
    }
    arr1 = aset(arr1).slice();
    arr2 = aset(arr2).slice();
    var arr = arr2.slice();
    var res = [];
    var arr = [];
    var z = 0;
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr[z] = arr1[i];
                z++;
            }
        }
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr.indexOf(arr1[i]) === -1){
            res.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (arr.indexOf(arr2[i]) === -1){
            res.push(arr2[i]);
        }
    }
    document.getElementById("difference").innerHTML = res;
}