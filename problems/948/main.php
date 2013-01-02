<?php

$d = explode(".", exec(__DIR__ . '/solution'))[1];

echo "answer is ", array_sum(preg_split('//', $d));
