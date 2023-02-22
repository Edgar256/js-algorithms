/* 1. FIBONACCI  */
const input = document.getElementById('UI_input');

const updateNumber = () => {
  number = input.value;
  document.getElementById('UI_output').innerHTML = number;
  fibonacci(number);
  document.getElementById('fib').innerHTML = fibonacci(number);
};

const fibonacci = (number) => {
  let n = 1;
  for (i = 2; i <= number; i++) {
    n *= i;
  }
  return n;
};

input.addEventListener('keyup', updateNumber);

/* 2. PALINDROM  */

const palindrom_input = document.getElementById('palindrom_input');

const checkPalindrom = (palindrom) => {
  palindrom = palindrom_input.value;
  document.getElementById('palindrom_text').innerHTML = palindrom;

  let len = palindrom.length; //get length of the word
  let position = len - 1; //get index of the last character
  let median = len / 2; // get median character
  let palindrom_parity = '';
  let palindrom_boolean = 'true';

  for (var i = 0; i < median + 1; i++) {
    if (palindrom.charAt(i) == palindrom.charAt(position - i)) {
      palindrom_parity = `is a Palindrom`;
      palindrom_boolean = 'true';
      document.getElementById('palindrom_parity').innerHTML = palindrom_parity;
      document.getElementById('palindrom_boolean').innerHTML =
        palindrom_boolean;
    } else {
      palindrom_parity = `is not a Palindrom`;
      palindrom_boolean = 'false';
      document.getElementById('palindrom_parity').innerHTML = palindrom_parity;
      document.getElementById('palindrom_boolean').innerHTML =
        palindrom_boolean;
    }
  }
};

/* 3. STRING REVERSAL  */
const stringReverse = (string_to_reverse) => {
  string_to_reverse = document.getElementById('string_reverse_input').value;
  let string_array = string_to_reverse.split('');
  let reversed_array = string_array.reverse();
  let reversed_string = reversed_array.join('');
  document.getElementById('string_to_reverse').innerHTML = string_to_reverse;
  document.getElementById('reversed_string').innerHTML = reversed_string;
};

// Get Angles
var getAngleClock = () => {
  let timeClockInput = document.getElementById('timeClockInput');
  if (timeClockInput.value == '') return alert('Please enter a time');
  let [hrs, mins] = timeClockInput.value.split(':');
  hrs = parseInt(hrs);
  mins = parseInt(mins);
  if (isNaN(hrs) || isNaN(mins)) return null;
  if (hrs > 12) {
    hrs = hrs % 12;
  }
  if (mins > 59) {
    mins = mins % 60;
  }
  let hourMinutes = (hrs + mins / 60) * 5;
  let difference = Math.abs(hourMinutes - mins);
  difference > 30 ? (difference = 60 - difference) : difference;
  let angle = difference * 6;
  return (document.getElementById('degrees_angle').innerHTML = angle);
};

// Area or Perimeter
const areaOrPerimeter = () => {
  let length = document.getElementById('length').value;
  let width = document.getElementById('width').value;
  if (isNaN(length) || isNaN(width)) return alert('Please enter a number');
  let area = length * width;
  let perimeter = 2 * (length + width);
  if (length === width) {
    return (document.getElementById('area_or_width').innerHTML =
      ' square of area ' + area + 'cm²');
  } else {
    return (document.getElementById('area_or_width').innerHTML =
      ' rectangle of perimeter ' + perimeter + 'cm');
  }
};

// Convert number to Roman Numerals
const convertToRoman = () => {
  let num = document.getElementById('numToRoman').value;
  if (isNaN(num) || !num) return alert('Please enter a number');
  let int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  times = [];
  let rNumerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let arr = [];
  let temp = num;
  for (let i = 0; i < int.length; i++) {
    if (int[i] <= temp) {
      times.push(Math.floor(temp / int[i]));
      let a = times[times.length - 1];
      for (let j = 0; j < a; j++) {
        arr.push(rNumerals[i]);
      }
      temp = temp - int[i] * a;
    }
  }
  return (document.getElementById('num_to_roman').innerHTML = arr.join(''));
};
