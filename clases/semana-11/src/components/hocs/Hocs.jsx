export const Hocs = ({ message, status, type, header }) => {
  const cardStyles = `card card--${status}`;

  // Intentar dejar la template lo más limpia posible
  return (
    <div className={cardStyles}>
      {header}
      <div className="card-body">
        <p>
          Mensaje: {message}
          {type}
        </p>
      </div>
    </div>
  );
};
