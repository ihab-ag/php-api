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
    //  events
    palindromeBtn.onclick=()=>{
        getPalindrome();
    }
    passBtn.onclick=()=>{
        getPass();
    }

    solveBtn.onclick=()=>{
        getResult();
    }
    // functions
    // get christmas days from api
    function getDays(){
        axios.get('christmas-api.php')
            .then(response => {
                day.innerText = response.data.days;
            })
            .catch(error => console.error(error));
        }
    // get palindrome from api
    function getPalindrome(){
        axios.get('palindrome-api.php?input='+palindromeInput.value)
            .then(response => {
                palindromeOutput.innerText = response.data.palindrome;
            })
            .catch(error => console.error(error));
        }
        // password strength api
    function getPass(){
        let bodyFormData = new FormData();
        bodyFormData.append('password',pass.value);
        axios.post('password-strength-api.php',bodyFormData)
            .then(response => {
            console.log(response.data);
            passOutput.innerText=response.data.result;
            })
            .catch(error => console.error(error))
    }
        // get result from expression api
        function getResult(){
            let bodyFormData = new FormData();
            bodyFormData.append('a',a.value);
            bodyFormData.append('b',b.value);
            bodyFormData.append('c',c.value);
            axios.post('expression-api.php',bodyFormData)
              .then(response => {
                console.log(response.data);
                equationOutput.innerText=response.data.answer;
              })
              .catch(error => console.error(error))
        }
}