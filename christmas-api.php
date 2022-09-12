<?php
// get todays year day
$today=getdate();
print_r($today);
$day=$today[yday]-20;
echo $day;
?>