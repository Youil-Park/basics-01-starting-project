const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // 로그

// 입력 필드에서부터 사용자 입력을 가져오는 함수
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// 연산
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${currentResult} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);   // from vendor file
}

// 덧셈
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber); // 사용자가 입력한 값을 저장(로그)
    console.log(logEntries[1]);
}

// 뺄셈
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

// 곱하기
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

// 나누기
function divide () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);