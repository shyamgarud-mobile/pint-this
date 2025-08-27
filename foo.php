<?php

class Foo
{
    // Properties
    public $name;

    private $value;

    protected $status;

    // Constructor
    public function __construct($name, $value, $status = 'active')
    {
        $this->name = $name;
        $this->value = $value;
        $this->status = $status;
    }

    // Public method
    public function getInfo()
    {
        return "Foo: Name = {$this->name}, Value = {$this->value}, Status = {$this->status}";
    }

    // Private method
    private function calculateDouble()
    {
        return $this->value * 2;
    }

    // Method that uses private method
    public function getDoubleValue()
    {
        return $this->calculateDouble();
    }
}
