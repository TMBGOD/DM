<?php
    $matrix = strval($_POST["matrixin"]);
    $matrix = explode("\n", $matrix);
    for ($i = 0; $i < count($matrix); $i++) {
        $matrix[$i] = explode(" ", $matrix[$i]);
        for ($j = 0; $j < count($matrix[$i]); $j++) {
            $matrix[$i][$j] = intval(trim($matrix[$i][$j]));
        }
    }
    /**
     * @param $matrix
     * @return bool
     */
    //vvod() - Функция, которая проверяет корректность ввода, матрица должна быть квадратной и без лишних символов.
    function vvod($matrix) {
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
     * @return mixed
     */
    /*FloydUo() - Фукнция реализующая алгоритм Флойда-Уоршелла на графе, если мы не найдем путь из одной точки в другую,
    то в матрице достижимости эта позиция будет равна 0.
    */
    function FloydUo($matrix)
    {
        $len = count($matrix);
        for ($i = 0; $i < $len; $i++) {
            for ($j = 0; $j < count($matrix[$i]); $j++) {
                if ($matrix[$i][$j] == 0){
                    $matrix[$i][$j] = 1000000;
                }
            }
        }
        $d = $matrix;
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
        return $d;
    }

    /**
     * @param $res_floyd
     */
    //out() - Функция для форматирования вывода на сайт.
    function out($res_floyd) {
              echo ("<textarea rows = '7' cols = '12' style = 'resize:none;' >");
              for($i = 0; $i < count($res_floyd); $i++) {
                  for ($j = 0;$j < count($res_floyd);$j++){
                      if ($res_floyd[$i][$j] == 1000000 && $i != $j) {
                          $res_floyd[$i][$j] = strval(0);
                      }
                      else{
                          $res_floyd[$i][$j] = strval(1);
                      }
                      echo ($res_floyd[$i][$j] . " ");
                  }
                  echo ("\n");
              }
              echo ("</textarea>");
            }
    if (!vvod($matrix)) {
		echo "<head><meta charset='utf-8'></head>";
        echo "Ошибка";
    }
    else {
		echo "<head><meta charset='utf-8'></head>";
        echo "<h3>Матрица достижимости </h3>";
        echo out(FloydUo($matrix));
    }


?>