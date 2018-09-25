import '../sass/index.scss';
import Head from 'next/head';
import Header from '../components/Header';
import '../sass/bootstrap/bootstrap.scss';
import Router from 'next/router';

const Eventos = props => {
  return (
    <div>
      <Head>
        <title>{props.eventName}</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0,user-scalable=no"
        />
        <meta
          name="description"
          content="Somos tu aliado para impulsar la transformación en tu práctica pedagogica, profundizando en el desarrollo humano y el aprendizaje significativo."
        />
      </Head>
      <Header />
      <p>Texto</p>
    </div>
  );
};

Eventos.getInitialProps = context => {
  const { res, query } = context;
  const { eventName } = query;
  if (eventName === 'salud-emocional-a-prueba-de-aulas') {
    return {
      eventName: 'Salud Emocional a Prueba de Aulas'
    };
  }
  return res.redirect('/');
};

export default Eventos;
