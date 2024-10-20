export const CardPreview = ({ name, gender, email, age, bornDate, picture, nat, phone }) => {
  return <div>
    <h3 className="card-preview__title">{name}</h3>
    <picture className="card-preview__image">
      <source />
      <source />
      <image />
    </picture>
    <div className="card-preview__info">
      <span className="card-preview__info-gender">
        {gender}
      </span>
      <span className="card-preview__info-nat">
        {nat}
      </span>
    </div>
    <div className="card-preview__divider"></div>
    <div className="card-preview__row">
      <div>
        <span>
          Fecha nacimiento:
        </span>
        <span>
          {bornDate}
        </span>
      </div>
      <div>
        <span>
          Edad:
        </span>
        <span>
          {age}
        </span>
      </div>
    </div>
    <div className="card-preview__row">
      <span>
        Email:
      </span>
      <span>
        {email}
      </span>
    </div>
    <div className="card-preview__row">
      <span>
        Celular:
      </span>
      <span>
        {phone}
      </span>
    </div>
  </div>
}