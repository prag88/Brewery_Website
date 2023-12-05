<?php
    include("connection.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="form">
        <h1>login form</h1>
        <form name="form" action="login.php" method="POST">
            <label>Username</label>
            <input type="text" id="user" name="user"><br>
            <label>Password</label>
            <input type="password" id="pass" name="pass"><br>
            <input type="submit" id="btn" value="Login" name="submit"/>
</form>
</body>
</html>