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


// if 강의
function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;   // 연산자

    if (calculationType === 'ADD') {            // 덧셈
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT') { // 빼기
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY') { // 곱하기
        currentResult *=  enteredNumber;
        mathOperator = '*';
    } else if(calculationType === 'DIVIDE'){    // 나누기
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);            // 연산기호
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);   // 계산 유형
}

// 덧셈
function add(){
    calculateResult('ADD');
}

// 뺄셈
function subtract() {
   calculateResult('SUBTRACT');
}

// 곱하기
function multiply() {
    calculateResult('MULTIPLY');
}

// 나누기
function divide () {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);