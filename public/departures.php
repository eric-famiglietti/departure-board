<?php

$url = 'http://developer.mbta.com/lib/gtrtfs/Departures.csv';

header('Access-Control-Allow-Origin: *');
header('Content-Type: text/csv');

echo file_get_contents($url);
