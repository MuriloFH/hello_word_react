import { Link } from "react-router-dom"
import './home.css'

export default function Home(){
    return (
        <>
            <h1>Home</h1>
            <ul className="home">
                <li>
                    <Link to="/calcuradora_imc">IMC</Link>
                </li>
                <li>
                    <Link to="/calculadora">Calculadora</Link>
                </li>
                <li>
                    <Link to="/compras">Lista de compras</Link>
                </li>
            </ul>
        </>
    )
}