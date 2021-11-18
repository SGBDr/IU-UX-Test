<?php

class User{
    private $_phone;
    private $_mail;
    private $_pwd;
    private $_id;


    public function __construct($phone, $mail, $pwd, $id){
        $this->_phone = $phone;
        $this->_mail = $mail;
        $this->_pwd = $pwd;
        $this->_id = $id;
    }

    public function getId(){return $this->_id;}
    public function getPhone(){return $this->_phone;}
    public function getMail(){return $this->_mail;}
    public function getPwd(){return $this->_pwd;}

    public function setId($param){$this->_id = $param;}
    public function setPhone($param){$this->_phone = $param;}
    public function setMail($param){$this->_mail = $param;}
    public function setPwd($param){$this->_pwd = $param;}

}

?>