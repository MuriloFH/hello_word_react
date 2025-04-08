import { useState } from "react";

export default function CalculadoraImc () {

    let [weigtValue, setWeigtValue] = useState('');
    let [heightValue, setHeightValue] = useState('');
    let [result, setResult] = useState('');

    const handleResult = () => {
        setResult(`O seu IMC é: ${result}`);
        calcValues(weigtValue, heightValue);
    }

    const handleClear = () => {
        setWeigtValue('')
        setHeightValue('')
        setResult('')
    };

    const handleChangeInputFirstValue = (event) => {
        setWeigtValue(event.target.value)
    };

    const handleChangeInputSecondtValue = (event) => {
        setHeightValue(event.target.value)
    };

    const calcValues = (weigtValue, heightValue) => {

        let mathResult;
        let classification;

        mathResult = Math.round(weigtValue / (heightValue * heightValue))
        
        if (mathResult < 16){
            classification = "Magreza grave"
        }

        if (mathResult >= 16 || mathResult < 17){
            classification = "Magreza moderada"
        }

        if (mathResult >= 17 || mathResult < 18.5){
            classification = "Magreza leve"
        }

        if (mathResult >= 18.5 || mathResult < 25){
            classification = "Saudável"
        }

        if (mathResult >= 25 || mathResult < 30){
            classification = "Sobrepeso"
        }

        if (mathResult >= 30 || mathResult < 35){
            classification = "Obesidade Grau 1"
        }

        if (mathResult >= 35 || mathResult < 40){
            classification = "Obesidade Grau 2"
        }

        if (mathResult >= 40){
            classification = "Obesidade Grau 3"
        }
        
        setResult(classification);

    }

    return (
        <>
            <h1> Calculadora de IMC </h1>
            <label>Peso</label>
            <input type="number" onChange={handleChangeInputFirstValue} value={weigtValue}/>
            <br />
            <br />
            
            <label>Altura</label>
            <input type="number" onChange={handleChangeInputSecondtValue} value={heightValue}/>
            <br />
            <br />
    
            <button onClick={handleResult}>Calcular</button>
            <button onClick={handleClear}>Limpar</button>
    
            {result && <p>{result}</p>}
        </>
    )
}
