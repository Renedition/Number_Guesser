let btn = document.getElementById('btn');
let output = document.getElementById('output_text')
let guess = 0;
let answer = Math.floor(Math.random()*100)
console.log(answer)
btn.addEventListener('click', function(){
    let response = document.getElementById('response').value;
    if (!isNaN(response)){
        if (response == answer){
            output.innerHTML = "You are correct";
        } else {
            output.innerHTML = "You are wrong";
            document.getElementById('response').value = '';
            guess++
            if(guess >= 3){
                if (answer > response){
                    output.innerHTML = "You are too low!";
                    document.getElementById('response').value = '';
                } else if (answer < response){
                    output.innerHTML = "You are too high!"; 
                    document.getElementById('response').value = '';
                }
                if(guess >= 5){
                    output.innerHTML = "You are "+ Math.abs(response-answer) + " away!";
                    document.getElementById('response').value = '';
                }
            }
        }

    }
    else{
    output.innerHTML = "Not a valid guess!";
    document.getElementById('response').value = '';
    }
})