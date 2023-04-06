// Mendefinisikan tiga variabel untuk menyimpan nilai kalkulator
let prevNumber = '';
let calculatorOperation = '';
let currentNumber = '0';

// Mendefinisikan variabel untuk mengakses layar kalkulator
const calculatorScreen = document.querySelector('.calculator-screen');

// Mendefinisikan fungsi untuk mengupdate layar kalkulator
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// Mendefinisikan fungsi untuk menginput bilangan ke layar kalkulator
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// Mendapatkan semua tombol angka dan menambahkan event listener ke masing-masing tombol
const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// Mendefinisikan fungsi untuk menginput operator ke layar kalkulator
const inputOperator = (operator) => {
  if (calculatorOperation === '') {
    prevNumber = currentNumber;
  }

  calculatorOperation = operator;
  currentNumber = '0';
  updateScreen(calculatorOperation); // Menampilkan nilai operator pada layar kalkulator
};

// Mendapatkan semua tombol operator dan menambahkan event listener ke masing-masing tombol
const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

// Mendefinisikan tombol (=) dan menambahkan event listener
const equalSign = document.querySelector('.equal-sign');

// Mendefinisikan fungsi untuk melakukan perhitungan saat tombol sama dengan (=) ditekan
const calculate = () => {
  let result = '';
  switch (calculatorOperation) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = prevNumber - currentNumber;
      break;
    case '*':
      result = prevNumber * currentNumber;
      break;
    case '/':
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculatorOperation = '';
  updateScreen(currentNumber);
};

equalSign.addEventListener('click', () => {
  calculate();
});

// Mendefinisikan tombol clear (C) dan menambahkan event listener
const clearBtn = document.querySelector('.all-clear');

// Mendefinisikan fungsi untuk menghapus semua nilai pada kalkulator
const clearAll = () => {
  prevNumber = '';
  calculatorOperation = '';
  currentNumber = '0';
  updateScreen(currentNumber);
};

clearBtn.addEventListener('click', () => {
  clearAll();
});

// Mendefinisikan tombol delete dan menambahkan event listener
const deleteBtn = document.querySelector('.delete');

// Mendefinisikan fungsi untuk menghapus karakter terakhir pada layar kalkulator
const deleteLastChar = () => {
  const screen = document.querySelector('.calculator-screen');
  screen.value = screen.value.slice(0, -1);
};

deleteBtn.addEventListener('click', () => {
  deleteLastChar();
});

// Mendefinisikan tombol desimal dan menambahkan event listener
const decimal = document.querySelector('.decimal');

// Mendefinisikan fungsi untuk menginput titik desimal ke layar kalkulator
const inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});