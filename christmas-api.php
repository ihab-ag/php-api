<?php
// get todays year day
$today = time();
// get christmas day
$christmas = strtotime('December 25');
// diffrence in seconds
$seconds= $christmas - $today;
// get days 
$days= $seconds/86400;
// round number
$days = floor($days);
// results
$result=[
    "days"=>$days
];
// echo result
echo json_encode($result);
?>