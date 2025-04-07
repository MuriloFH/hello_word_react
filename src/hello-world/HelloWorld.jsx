import React, { useState } from "react";

export default function HelloWorld () {
    let [name, setName] = useState("");  // criando uma variável monitorada pelo react
    let [message, setMessage] = useState("");    

    const handleHelloWorld = () => {
        //pegando o evento de clique
        setMessage(`Hello world, ${name}`)
    };

    const handleClear = () => {
        setName('')
        setMessage('')
    };

    const handleChangeInput = (event) => {
        setName(event.target.value)
    };


    const handKeyUp = (event) =>{
        if(event.key === 'Escape'){
            handleClear();
        }
        
        if (event.key === 'Enter'){
            handleHelloWorld();
        }
    }

    // a função, sempre retorna uma função jsx para renderizar algo na tela.  
    return (
        <>
            <h1> Hello World </h1>
            <input type="text" onKeyUp={handKeyUp} onChange={handleChangeInput} value={name}/>
            <button onClick={handleHelloWorld}>Hello World</button>
            <button onClick={handleClear}>Limpar</button>
            {message && <p>{message}</p>}
        </>
    )
}