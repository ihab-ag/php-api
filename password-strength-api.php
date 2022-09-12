<?php
// get password
$pass=$_POST['password'];
// find requirements with regex
if(!preg_match('@[a-z]@',$pass)){
    $result=[
        "result"=>"use at least one lowercase character"
    ];
}
elseif(!preg_match('@[A-Z]@',$pass)){
    $result=[
        "result"=>"use at least one uppercase character"
    ];
}
elseif(!preg_match('@[0-9]@',$pass)){
    $result=[
        "result"=>"use at least one digit"
    ];
}
elseif(!preg_match('@[\W]@',$pass)){
    $result=[
        "result"=>"use at least one special character"
    ];
}
elseif(strlen($pass)<12){
    $result=[
        "result"=>"use at least 12 characters"
    ];
}
else{
    $result=[
        "result"=>"strong password"
    ];
}
// echo results
echo json_encode($result);
?>