<?php

header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "stylenest_db");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB connection failed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['cart'])) {
    echo json_encode(["status" => "error", "message" => "No cart data"]);
    exit();
}

foreach ($data['cart'] as $item) {
    $name = $conn->real_escape_string($item['name']);
    $price = (int)$item['price'];
    $size = $conn->real_escape_string($item['size']);

    $sql = "INSERT INTO orders (product_name, price, size)
            VALUES ('$name', '$price', '$size')";

    if (!$conn->query($sql)) {
        echo json_encode(["status" => "error", "message" => "Insert failed"]);
        exit();
    }
}

echo json_encode(["status" => "success"]);
$conn->close();
?>