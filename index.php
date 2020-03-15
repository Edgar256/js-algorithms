<html lang="en">
<head>
    <title>Algorithms</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container"> <br> <br>
        <h1 class="text-muted text-center">Working JS Algorithm examples</h1>
        <h4 class="text-center">find the code on my github at <a href="https://github.com/Edgar256/js-algorithms">https://github.com/Edgar256/js-algorithms</a></h4> <br> <br> <br>
        <div class="card-columns card-columns-double">
            <div class="card">
                <div class="card-body">
                    <h3 class="center-text">FIBONACCI ALGORITHM</h3>
                    <p>
                        The Fibonacci sequence is a set of numbers that starts with a one or a zero, 
                        followed by a one, and proceeds based on the rule that each number 
                        (called a Fibonacci number) is equal to the sum of the preceding two numbers.
                    </p>
                    <h5>Enter a number whose Fibonacci you want to find</h5>
                    <div>
                        <form action="">
                            <div class="form-group">
                                <input type="number" class="form-control" id="UI_input">
                            </div>
                        </form>
                    </div>
                    <div>
                        The fibonacci of <strong><span id="UI_output">xx</span></strong> is <strong><span id="fib">xx</span></strong>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h3 class="center-text">PALINDROMME</h3>
                    <p>
                            A palindrome is a word, phrase, or sentence reads the same backward or 
                            forward--such as Madam, I'm Adam. Semordnilaps (the word palindromes in reverse) 
                            are words that spell other words when spelled backwards (for example, star/rats, 
                            drawer/reward).
                    </p>
                    <h5>Enter a number whose word you to find if it is a Palindrom or not</h5>
                    <div>
                            <form action="">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="palindrom_input" onkeyup="checkPalindrom()">
                                </div>
                            </form>
                    </div>
                    <div>
                        <strong><span id="palindrom_text">xx</span> <span id="palindrom_parity"> is a ----></span> ( <span id="palindrom_boolean">true</span> )</strong>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body">
                    <h3 class="center-text">STRING REVERSAL</h3>
                    <p>
                        Not only is the problem of reversing a string a very common question to 
                        be asked in a technical interview, it can so often be a step required in 
                        approaching so many other problems! Say we’re given the directions:
                    </p>
                    <p>
                        <blockquote class="text-mute code">
                            Write a function that, when given a string, will return a 
                            new string with the same characters in reversed order
                        </blockquote>
                    </p>
                    <h5>Enter a text you what to reverse</h5>
                    <div>
                            <form action="">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="string_reverse_input" onkeyup="stringReverse()">
                                </div>
                            </form>
                    </div>
                    <div>
                        <strong><span id="string_to_reverse"> xx </span></strong> has been reversed as <strong><span id="reversed_string"> xx </span></strong>
                    </div>
                </div>
            </div>

        </div>
    </div>    
    <script src="main.js"></script>    
</body>
</html>