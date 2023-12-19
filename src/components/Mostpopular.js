import './Mostpopular.css';
import Cards from './Cards.js';

const Mostpopular = () => {
  return (
    <section className="mostpopular">
        <div className="container">
          <article className="heading">
          <h2>Most Popular Hotels</h2>
          <div className="line"></div>
          </article>

          <div className='popular-container'>
            <Cards />
          </div>
        </div>
    </section>
  );
}

export default Mostpopular;