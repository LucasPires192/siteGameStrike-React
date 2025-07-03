<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    header('Content-Type: application/json');

    require 'conection.php';

    try {
        $sql = "SELECT jogos.*, 
                    generos.nome AS genero, 
                    desenvolvedoras.nome AS desenvolvedora, 
                    AVG(pontuacoes.nota) AS nota
                FROM jogos      
                JOIN generos ON jogos.id_genero = generos.id 
                JOIN desenvolvedoras ON jogos.id_desenvolvedora = desenvolvedoras.id
                LEFT JOIN pontuacoes ON jogos.id = pontuacoes.id_jogo
                GROUP BY jogos.id";

        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $allGames = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (!$allGames) {
            http_response_code(404);
            echo json_encode(['error' => 'Nenhum jogo encontrado']);
            exit;
        }

        echo json_encode($allGames);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Erro ao buscar os jogos',
            'mensagem' => $e->getMessage()
        ]);
        exit;
    }
?>
