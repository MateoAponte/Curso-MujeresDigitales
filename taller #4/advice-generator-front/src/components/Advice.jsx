import Divider from '../assets/images/pattern-divider-desktop.svg';
import Icon from '../assets/images/icon-dice.svg';

export const Advice = ({ id, description, handleClick, loading }) => {
  const Content = !loading ? (
    <>
      <h6 className="advice__title">Advice # {id}</h6>
      <div className="advice__description-container">
        <span className="advice__description-text">"{description}"</span>
      </div>
      <figure className="advice__image">
        <img src={Divider} alt="Divider between advice and button" />
      </figure>
      <button className="advice__button" onClick={() => handleClick()}>
        <figure className="advice__button-icon">
          <img src={Icon} alt="Icon to random advice" />
        </figure>
      </button>
    </>
  ) : (
    <div className="advice__description-container">
      <div className="loader"></div>
    </div>
  );

  return <div className="advice">{Content}</div>;
};
