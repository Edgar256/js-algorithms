
/* 1. FIBONACCI  */

const input = document.getElementById('UI_input');

const updateNumber = () => {
    number = input.value;
    document.getElementById('UI_output').innerHTML = number;
    fibonacci(number)    
    document.getElementById('fib').innerHTML = fibonacci(number);
};

const fibonacci = (number) => {
    let n = 1;
    for(i = 2; i <= number; i++){
        n *= i;                
    }
    return n;  
} 

input.addEventListener('keyup', updateNumber)



/* 2. PALINDROM  */

const palindrom_input = document.getElementById('palindrom_input');

const checkPalindrom = (palindrom) => {

    palindrom = palindrom_input.value;
    document.getElementById('palindrom_text').innerHTML = palindrom;

    let len = palindrom.length; //get length of the word
    let position = len-1;      //get index of the last character
    let median  = len/2  // get median character
    let palindrom_parity = '';
    let palindrom_boolean = 'true';
    

    for(var i = 0; i < median+1; i++){
        if(palindrom.charAt(i) == palindrom.charAt(position-i)){
            palindrom_parity = `is a Palindrom`;
            palindrom_boolean = 'true'
            document.getElementById('palindrom_parity').innerHTML = palindrom_parity ;
            document.getElementById('palindrom_boolean').innerHTML = palindrom_boolean ;
        }else{
            palindrom_parity = `is not a Palindrom`;
            palindrom_boolean = 'false';
            document.getElementById('palindrom_parity').innerHTML = palindrom_parity ;
            document.getElementById('palindrom_boolean').innerHTML = palindrom_boolean ;
        }    
    }          
}


/* 3. STRING REVERSAL  */

const stringReverse = (string_to_reverse) => {
    string_to_reverse = document.getElementById('string_reverse_input').value;    
    let string_array = string_to_reverse.split('');
    let reversed_array = string_array.reverse();
    let reversed_string = reversed_array.join('');
    document.getElementById('string_to_reverse').innerHTML = string_to_reverse ;
    document.getElementById('reversed_string').innerHTML = reversed_string ;
}