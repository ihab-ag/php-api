<?php
// get values
$a=$_POST['a'];
$b=$_POST['b'];
$c=$_POST['c'];
// b cannot be equal to 0
if($b==0){
    $result=[
        "answer"=>"mathmatical error"
    ];
}
// result of expression
else{
    $r=pow($a,3)+$b*$c+$a/$b;
    $result=[
        "answer"=>$r
    ];
}
// echo result as json
echo json_encode($result);
?>