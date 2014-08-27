<?php
  $root = (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/';
  $links = array( "teams" => array("bayern" => $root . "api/bayern", "chelsea" => $root . "api/chelsea"));
  header('Content-type: application/json; charset=utf-8');
  echo json_encode($links);
?>
