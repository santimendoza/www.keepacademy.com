import React from 'react';
import './EventosList.scss';

export default class EventosList extends React.Component {
  render() {
    return (
      <section id="who" className="who-container">
        <div className="who container">
          <div className="who-title">
            <h2>¿Qué es Keep Academy?</h2>
            <p>
              Somos tu aliado para impulsar la transformación en tu práctica
              pedagogica, profundizando en el desarrollo humano y el aprendizaje
              significativo. Juntos, queremos lograr:
            </p>
          </div>
          <div className="features">
            <div className="feature">
              <i className="material-icons">account_balance</i>
              <h4>Valoración social del docente</h4>
              <p>
                Queremos que la comunidad pueda ver el verdadero valor de un
                docente.
              </p>
            </div>
            <div className="feature">
              <i className="material-icons">star_rate</i>
              <h4>Maestros excelentes para resultados excelentes</h4>
              <p>
                ¿Quieres tener clases extraordinarias? Comienza por ser un
                profesor extraordinario.
              </p>
            </div>
            <div className="feature">
              <i className="material-icons">group</i>
              <h4>Apoyarte dentro y fuera del aula</h4>
              <p>
                Un buen resultado en el aula, depende de una buena preparación
                fuera de ella.
              </p>
            </div>
            <div className="feature">
              <i className="material-icons">check_circle</i>
              <h4>Sacar la mejor versión de ti mismo</h4>
              <p>
                Siempre hay una oportunidad para ser mejor. ¡Alcanza tu máximo
                potencial!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
