import Divider from '../assets/images/pattern-divider-desktop.svg';
import Icon from '../assets/images/icon-dice.svg';
import CaretLeft from '../assets/images/caret-left.png';
import CaretRight from '../assets/images/caret-right.png';

export const Advice = ({ id, description, dispatch, fetchData, loading }) => {
  const handlePrev = () => {
    dispatch({ type: 'PREV' });
  };
  const handleNext = () => {
    dispatch({ type: 'NEXT' });
  };
  const handleRandom = () => {
    fetchData(false);
  };

  const Content = !loading ? (
    <>
      <h6 className="advice__title">Advice # {id}</h6>
      <div className="advice__description-container">
        <span className="advice__description-text">"{description}"</span>
      </div>
      <figure className="advice__image">
        <img src={Divider} alt="Divider between advice and button" />
      </figure>
      <div className="advice__buttons">
        <button
          className="advice__button advice__button--pos-left"
          onClick={() => handlePrev()}
        >
          <figure className="advice__button-icon ">
            <img src={CaretLeft} alt="Icon to left advice" />
          </figure>
        </button>
        <button className="advice__button" onClick={() => handleRandom()}>
          <figure className="advice__button-icon">
            <img src={Icon} alt="Icon to random advice" />
          </figure>
        </button>
        <button
          className="advice__button advice__button--pos-right"
          onClick={() => handleNext()}
        >
          <figure className="advice__button-icon ">
            <img src={CaretRight} alt="Icon to right advice" />
          </figure>
        </button>
      </div>
    </>
  ) : (
    <div className="advice__description-container">
      <div className="loader"></div>
    </div>
  );

  return <div className="advice">{Content}</div>;
};
