<?php
require 'User.class.php';

class RSManager{
    private $_db;

    public function __construct($db){
        $this->_db = $db;
    }

    public function getDb(){
        return $this->_db;
    }

    public function AddUser(User $user){
        $user->setPwd($user->getPwd());
        $q = $this->_db->query("INSERT INTO users SET phone = " + $user->getPhone() + " , mail = '" + $user->getMail() + "' , pwd = '" + sha1($user->getPwd()) + "'");
        var_dump($q);
        return $q;
    }

    public function VerifyUser(User $user){
        $q = $this->_db->query("SELECT * FROM users WHERE phone = " . $user->getPhone() . " pwd = '" . sha1($user->getPwd()) . "'");
        var_dump($q->fetch());
        if($don = $q->fetch())return $don['id'];
        return -1;
    }
}


?>


