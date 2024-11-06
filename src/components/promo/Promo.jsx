import './promo.css';
import promoImg from './../../img/images/promoGirl.jpg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className='promo__title'>
              <span className='hightlight'>LET'S</span>
              EXPLORE UNIQUE CLOTHES.
            </div>
            <div className='promo__desc'>
              Live for Influential and Innovative fashion!
            </div>
            <div className='promo__btn-wrapper'>
              <a href="#!" className="promo__btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="Promo" width={300} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo;