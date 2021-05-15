<?php
    //Ввод данных из с другой странички сайта
    $start = strval($_POST["start"]);
    $finish = strval($_POST["finish"]);
    $matrix = strval($_POST["matrixin"]);
    $matrix = explode("\n", $matrix);
    //Так как из textarea приходит текст с лишними символами, он обрабатывается здесь.
    for ($i = 0; $i < count($matrix); $i++) {
        $matrix[$i] = explode(" ", $matrix[$i]);
        for ($j = 0; $j < count($matrix[$i]); $j++) {
            $matrix[$i][$j] = intval(trim($matrix[$i][$j]));
        }
    }
    /**
     * @param $matrix
     * @param $start
     * @param $finish
     * @return bool
     */
    //vvod() - Функция, которая проверяет коректность ввода.
    function vvod($matrix, $start, $finish) {
        if ($start < 1 || $start > count($matrix)){
            return false;
        }
        if ($finish < 1 || $finish > count($matrix)){
            return false;
        }
        for ($i = 0; $i < count($matrix); $i++) {
            if ($matrix[$i][$i] != 0) return false;
        }
        for ($i = 0; $i != count($matrix); $i++) {
            if (count($matrix[$i]) > count($matrix)) return false;
        }
        for ($i = 0; $i < count($matrix); $i++) {
            for ($j = 0; $j < count($matrix[$i]); $j++) {
                if (!is_numeric($matrix[$i][$j]) || $matrix[$i][$j] < 0) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * @param $matrix
     * @param $start
     * @param $finish
     * @return mixed|string
     */
    /*FloydUo - Функция, реализующая алгоритм Флойда-Уоршелла на графе*/
    function FloydUo($matrix, $start, $finish)
    {
        $start = intval($start) - 1;
        $finish = intval($finish) - 1;
        $len = count($matrix);
        //Заполняем очень большим числом, те пути, где не можем пройти.
        for ($i = 0; $i < $len; $i++) {
            for ($j = 0; $j < count($matrix[$i]); $j++) {
                if ($matrix[$i][$j] == 0){
                    $matrix[$i][$j] = 1000000;
                }
            }
        }
        $d = $matrix;
        //Проходим по всем вершинам и ищем кратчайшие пути.
        for ($ij = 0; $ij < $len; $ij++) {
            for ($i = 0; $i < $len; $i++) {
                for ($j = 0; $j < $len; $j++) {
                    if ($i != $j) {
                        if ($d[$i][$j] > $d[$i][$ij] + $d[$ij][$j]) {
                            $d[$i][$j] = $d[$i][$ij] + $d[$ij][$j];
                        }
                    }
                }
            }
        }
        //Выводим кратчайший путь.
        if ($d[$start][$finish] == 1000000){
			echo "<head><meta charset='utf-8'></head>";
            return "Ошибка, пути нет";
        }
        return $d[$start][$finish];
    }
    if (!vvod($matrix, $start, $finish)) {
        echo "Ошибка";
    }
    else {
		echo "<head><meta charset='utf-8'></head>";
        echo "<h3>Кратчайшее расстояние: </h3>";
        echo FloydUo($matrix, $start, $finish);
    }

?>