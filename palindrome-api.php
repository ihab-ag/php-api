<?php
// get input
$str=$_GET['input'];
// convert to lowercase
$str= strtolower($str);
// get index
$i=0;
$j= strlen($str) -1;
// flag
$flag=1;
// loop string
while($i<$j){
    // skips space
    while($str[$i]==" "){
       $i++;
    }
    while($str[$j]==" "){
        $j--;
    }
    // break if chars don't match
    if($str[$i]!=$str[$j]){
        $flag=0;
        break;
    }
    // next index
    $i++;
    $j--;
}
// make out result
if($flag==1){
    $result=[
        "palindrome"=>"true"
    ];
}
else{
    $result=[
        "palindrome"=>"false"
    ];
}
// echo result as json
echo json_encode($result);
?>