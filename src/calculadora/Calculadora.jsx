import { useState } from "react"

export default function Calculadora () {
    let [firstValue, setFirstValue] = useState('');
    let [secondValue, setSecondValue] = useState('');
    let [mathOperation, setMathOperation] = useState('');
    let [result, setResult] = useState('');

    const handleResult = () => {
        setResult(`A ${mathOperation} de ${firstValue} com ${secondValue} é: ${result}`);
        calcValues(firstValue, secondValue, mathOperation);
    }

    const handleClear = () => {
        setFirstValue('')
        setSecondValue('')
        setMathOperation('')
        setResult('')
    };

    const handleChangeInputFirstValue = (event) => {
        setFirstValue(event.target.value)
    };

    const handleChangeInputSecondtValue = (event) => {
        setSecondValue(event.target.value)
    };
    
    const handleChangeInputMathOperatorValue = (event) => {
        setMathOperation(event.target.value)
    };

    const calcValues = (firstValue, secondValue, mathOperation) => {

        let mathResult;

        switch (mathOperation) {
            case '+':
                mathResult = firstValue + secondValue;
                break;
            case '-':
                mathResult = firstValue - secondValue;
                break;
            case '*':
                mathResult = firstValue * secondValue;
                break;
            case '/':
                mathResult = secondValue !== 0 ? firstValue / secondValue : "Divisão com zero!";
                break;
        
            default:
                mathResult = "Operador inválido"
                break;
        }

        setResult(mathResult)
    }

    return (
    <>
        <h1> Calculadora </h1>
        <label>Primeiro valor</label>
        <input type="number" onChange={handleChangeInputFirstValue} value={firstValue}/>
        <br />
        <br />
        
        <label>Segundo valor</label>
        <input type="number" onChange={handleChangeInputSecondtValue} value={secondValue}/>
        <br />
        <br />

        <label for="mathOperator">Operador Matemático</label>
        <select value={mathOperation} onChange={handleChangeInputMathOperatorValue}>
            <option value="">Selecione</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <br />
        <br />

        <button onClick={handleResult}>Calcular</button>
        <button onClick={handleClear}>Limpar</button>

        {result && <p>{result}</p>}
    </>
    )
}