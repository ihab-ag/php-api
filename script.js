window.onload=()=>{
    // elements
    // palindrome
    const palindromeInput=document.getElementById('palindrome');
    const palindromeBtn=document.getElementById('palindrome-btn');
    const palindromeOutput=document.getElementById('palindrome-output');
    // equation
    const a=document.getElementById('a');
    const b=document.getElementById('b');
    const c=document.getElementById('c');
    const solveBtn=document.getElementById('solve-btn');
    const equationOutput=document.getElementById('equation-output');
    // pass
    const pass=document.getElementById('pass');
    const passBtn=document.getElementById('pass-btn');
    const passOutput=document.getElementById('pass-output');
    // days
    const day=document.getElementById('days-output');

    getDays();



    // functions
    // get christmas days from api
    function getDays(){
        axios.get('christmas-api.php')
            .then(response => {
                console.log(response.data.days);
                day.innerText = response.data.days;
            })
            .catch(error => console.error(error));
        }
}