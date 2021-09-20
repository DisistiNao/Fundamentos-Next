import { useState } from 'react';
import Layout from '../components/Layout';

export default function Estado() {
    const [num, setNum] = useState(0)
    
    function incrementar() {
        setNum(num+1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{num}</div>
            <button onClick={() => incrementar()}>Incrementar</button>
        </Layout>
    )
}