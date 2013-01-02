<?php

class Spiral implements Iterator
{
    const RIGHT = 0;
    const DOWN = 1;
    const LEFT = 2;
    const UP = 3;

    protected $size;
    protected $x;
    protected $y;
    protected $iterations;
    protected $iteration;
    protected $direction;
    protected $step;
    protected $stepPosition;
    protected $secondStep;

    public function __construct($size)
    {
        $this->size = $size;
        $this->iterations = $size*$size;
        $this->rewind();
    }

    public function toArray()
    {
        $array = array();
        foreach ($this as $next) {
            if (!isset($array[$next->x])) {
                $array[$next->x] = array();
            }
            $array[$next->x][$next->y] = $next->value;
        }
        ksort($array);
        foreach ($array as &$row) {
            ksort($row);
        }
        return $array;
    }

    public function next()
    {
        if ($this->stepPosition == $this->step) {
            if ($this->secondStep) {
                $this->step++;
                $this->secondStep = false;
            } else {
                $this->secondStep = true;
            }
            $this->stepPosition = 0;
            $this->changeDirection();
        }
        $this->stepPosition++;

        if ($this->direction == self::RIGHT) {
            ++$this->y;
        } else if ($this->direction == self::DOWN) {
            ++$this->x;
        } else if ($this->direction == self::LEFT) {
            --$this->y;
        } else if ($this->direction == self::UP) {
            --$this->x;
        }

        $this->iteration++;
    }

    protected function changeDirection()
    {
        if ($this->direction == self::UP) {
            $this->direction = self::RIGHT;
        } else {
            $this->direction++;
        }
    }

    public function rewind()
    {
        $this->x = ceil($this->size/2)-1;
        $this->y = $this->x;
        $this->iteration = 1;
        $this->direction = self::RIGHT;
        $this->step = 1;
        $this->stepPosition = 0;
        $this->secondStep = false;
    }

    public function valid()
    {
        return $this->iteration <= $this->iterations;
    }

    public function key()
    {
        return $this->iteration;
    }

    public function current()
    {
        return (object)array('x' => $this->x, 'y' => $this->y, 'value' => $this->iteration);
    }
}
