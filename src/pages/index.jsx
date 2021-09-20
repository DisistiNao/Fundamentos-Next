import Link from 'next/link';
import Navegador from '../components/Navegador';

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo"/>
            <Navegador texto="Navegação #01" destino="/navegacao"/>
            <Navegador texto="Navegação #02" destino="/cliente/mg-2/123"/>
            <Navegador texto="Componente com Estado" destino="/estado"/>
        </div>
    )
}