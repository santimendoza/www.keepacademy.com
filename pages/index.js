import '../sass/index.scss';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import EventosList from '../components/EventosList';
import '../sass/bootstrap/bootstrap.scss';

export default () => (
  <div>
    <Head>
      <title>Keep Academy</title>
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
    <section className="header">
      <img src="/static/classroom.jpeg" alt="" />
    </section>
    <About />
    <EventosList />
    <footer>Desarrollado por Grupo Impulso</footer>
  </div>
);
