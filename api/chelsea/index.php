<?php
  $chelsea = file_get_contents("../../chelsea.json");
  header('Content-type: application/json; charset=utf-8');
  echo $chelsea;
?>
