<?php
  $bayern = file_get_contents("../../bayern.json");
  header('Content-type: application/json');
  echo $bayern;
?>
