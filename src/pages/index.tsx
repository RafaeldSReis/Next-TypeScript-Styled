import Head from 'next/head';
import * as C from '../styles/styled';

export default function Home() {
  return (
    <C.Container>
      <Head>
        <title>Next js</title>
      </Head>
      <div>
        <h1>Começo de Projeto</h1>
      </div>
    </C.Container>
  );
}
