const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // 로그

// 입력 필드에서부터 사용자 입력을 가져오는 함수
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// 연산
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);   // from vendor file
}

function writeToLog(
    operationIdentifier,    // 기호
    prevResult,             // 연산 전 결과
    operationNumber,        // 더해 줄 숫자
    newResult               // 합계
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,  // 연산 전 결과
        number: operationNumber,      // 더해 줄 숫자
        result : newResult      // 합계
    };    // 오브젝트
    logEntries.push(logEntry);          // 사용자가 입력한 값을 저장(로그)
    console.log(logEntries);
}

// 덧셈
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    console.log('INPUT',enteredNumber, currentResult);      // 콘솔
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// 뺄셈
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

// 곱하기
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// 나누기
function divide () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);