import { FaMale, FaFemale } from "react-icons/fa";

export const CardPreview = ({ name, gender, email, age, bornDate, image, nat, phone, location }) => {
  const GenderIcon = gender === 'male' ? FaMale : FaFemale; 

  return <div className="card-preview">
    <h3 className="card-preview__title">{name}</h3>
    <div className="card-preview__image">
      <picture className="card-preview__border">
        <source media="(min-width: 1200px)" />
        <source media="(min-width: 800px)" />
        <img src={image} />
      </picture>
    </div>
    <div className="card-preview__info">
      <span className={'card-preview__info-gender' + ` card-preview__info-gender--${gender}`}>
        <GenderIcon />
        {gender}
      </span>
      <span className="card-preview__info-nat">
        {location}
        <img src={`https://flagsapi.com/${nat}/flat/16.png`}></img>
      </span>
    </div>
    <div className="card-preview__divider"></div>
    <div className="card-preview__row">
      <span className="card-preview__label">
        Fecha nacimiento:
      </span>
      <span className="card-preview__content">
        {bornDate}
      </span>
    </div>
    <div className="card-preview__row">
      <span className="card-preview__label">
        Edad:
      </span>
      <span className="card-preview__content">
        {age}
      </span>
    </div>
    <div className="card-preview__row">
      <span className="card-preview__label">
        Email:
      </span>
      <span className="card-preview__content">
        {email}
      </span>
    </div>
    <div className="card-preview__row">
      <span className="card-preview__label">
        Celular:
      </span>
      <span className="card-preview__content">
        {phone}
      </span>
    </div>
  </div>
}