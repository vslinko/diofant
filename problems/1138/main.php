<?php

$file = exec(__DIR__ . "/solution");

$count = 0;

for ($i = 1, $strlen = strlen($file); $i < $strlen; $i+=2) {
    if ($file[$i] == "0") {
        $count++;
    }
}

echo "answer is ", $count, "\n";
