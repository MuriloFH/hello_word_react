import { useState } from 'react';
import './compras.css'

const Compras = () => {

    // key={item} determina que os elementos nunca vão repedir a partir de um valor, nesse caso o item do meu map
    const [listCompras, setListCompras] = useState(['Arroz', 'Feijão', 'Açucar']);

    const btnAdicionar = () => {
        const item = 'Frango'
        setListCompras((listCompras) => {
            return [...listCompras, item] // recriado a lista com o novo elemento vindo do botão
        }
        );
    }
    return (
        <section  className='comprasList'>
            <h1>Compras</h1>
            <button onClick={btnAdicionar}>Adicionar</button>
            <ol>
                {
                    listCompras.map(item => {
                        console.log(item)
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
        </section>
    )
};

export default Compras;