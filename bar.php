<?php

class Bar
{
    // Properties
                public $id;
                private $fooInstance;

    // Constructor
                            public function __construct($id, Foo $foo)
                            {
                                $this->id = $id;
                                $this->fooInstance = $foo;
                            }

    // Public method
                    public function showDetails()
                    {
                        return "Bar ID: {$this->id}, Linked Foo Info: " . $this->fooInstance->getInfo();
                    }

    // Method that modifies Foo object
    public function updateFooName($newName)
    {
        $this->fooInstance->name = $newName;
    }
}

?>
