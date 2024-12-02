import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default function HomePage() {


    return (
        <Typography>
            <Title>Seja bem vindo</Title>

            <Paragraph>
                Esta é uma aplicação simples, que simula as operações básicas de um CRUD nas entidades <b>produtos</b> e <b>categorias</b>. Onde um produto é conectado a uma categoria.
            </Paragraph>

            <Paragraph>
                Você deve escolher qual listagem deseja visualizar:
                <ul>
                    <li><a href='/products'>Produtos</a></li>
                    <li><a href='/categories'>Categorias</a></li>
                </ul>
            </Paragraph>

            <Paragraph>
                Esta aplicação foi desenvolvida por <a href='https://github.com/andrelarruda/'>André Arruda</a>, como parte do processo seletivo para Desenvolvedor de Software da FSBR.
            </Paragraph>

        </Typography>
    )
}