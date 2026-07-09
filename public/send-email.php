<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    
    $firstName = isset($input["firstName"]) ? htmlspecialchars(strip_tags(trim($input["firstName"]))) : "";
    $lastName = isset($input["lastName"]) ? htmlspecialchars(strip_tags(trim($input["lastName"]))) : "";
    $email = isset($input["email"]) ? filter_var(trim($input["email"]), FILTER_VALIDATE_EMAIL) : false;
    $role = isset($input["role"]) ? htmlspecialchars(strip_tags(trim($input["role"]))) : "";
    $organization = isset($input["organization"]) ? htmlspecialchars(strip_tags(trim($input["organization"]))) : "";
    $message = isset($input["message"]) ? htmlspecialchars(strip_tags(trim($input["message"]))) : "";
    
    if (!$email) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }
    
    $to = "info@arisefunds.com";
    $subject = "Arise Funds Inquiry from $firstName $lastName";
    
    $body = "Arise Funds Inquiry Details:\n\n";
    $body .= "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Role: $role\n";
    $body .= "Organization: $organization\n\n";
    $body .= "Message:\n$message\n";
    
    $headers = "From: no-reply@arisefunds.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email via mail()."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
