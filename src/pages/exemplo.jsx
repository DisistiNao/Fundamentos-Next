import Layout from "../components/Layout";
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
    return(
        <Layout titulo="Usando Componentes">
            <div>
                <Cabecalho titulo="Next.js & React" />
                <Cabecalho titulo="Aprenda na pratica" />
            </div>
        </Layout>
    )
}