<?php
require 'config.php';

$conn = new mysqli("127.0.0.1", "root", "", "pandora");

if ($conn->connect_errno) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    $name = sanitize($_POST['name']);
    $email = sanitize($_POST['email']);
    $password = sanitize($_POST['password']);
    $role = sanitize($_POST['role']);

    // Hash da senha antes de armazenar no banco de dados
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO user (name, email, password, role) VALUES ('$name', '$email', '$hashedPassword', '$role');";
    
    if ($conn->query($sql) === TRUE) {
        // Registro bem-sucedido, redireciona para a página de login
        header('location: login.html');
    } else {
        $error = 'Erro ao registrar o usuário: ' . $conn->error;
    }
}
?>
