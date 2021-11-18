<?php

    if(isset($_POST['type'])){
        $type = $_POST['type'];
        require 'RSManager.class.php';
        try{
            $manager = new RSManager(new PDO('mysql:host=localhost;dbname=hofdb', 'root', ''));
            if($type == "r"){
                $aws = $manager->AddUser(new User($_POST['phone'], $_POST['mail'], $_POST['pwd'], 0));
                if($aws)echo 'ok';
                else echo 'no';
            }else{
                $aws = $manager->VerifyUser(new User($_POST['phone'], $_POST['mail'], $_POST['pwd'], 0));
                echo $aws;
                if((int)$aws != -1){
                    session_start();
                    $_SESSION['id'] = $aws; 
                }
            }
        }
        catch (Exception $e){
            die('Erreur : ' . $e->getMessage());
        }
    }

?>