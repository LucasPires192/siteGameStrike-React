<?php
    $host = 'localhost';
    $db = 'loja_jogos';
    $user = 'root';
    $pass = '';
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$db;",$user,$pass);
    } catch (PDOException $e) {
        echo "Erro na conexão: " . $e->getMessage();
        exit;
    }
?>