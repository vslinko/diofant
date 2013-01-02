<?php

require_once './Spiral.php';

$size = 1001;

$spiral = new Spiral($size);

$leftRight = 0;
$rightLeft = 0;
foreach ($spiral as $next) {
    if ($next->x == $next->y) {
        $leftRight += $next->value;
    }
    if ($next->x + $next->y == $size - 1) {
        $rightLeft += $next->value;
    }
}

echo "answer is ", $leftRight * $rightLeft, "\n";
