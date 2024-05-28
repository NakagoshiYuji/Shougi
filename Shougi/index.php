<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>将棋</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table>
        <?php
        echo "<img src='images/fu.PNG' class='draggable small-image'>";
        for ($i = 0; $i < 9; $i++) {
            echo "<tr>";
            for ($j = 0; $j < 9; $j++) {
                echo "<td></td>";
            }
            echo "</tr>";
        }
        ?>
    </table>
    <script src="js/script.js"></script>
</body>
</html>
