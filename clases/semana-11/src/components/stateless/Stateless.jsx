// Pintar información
export const Stateless = ({ title, message, status, type }) => {
  const cardStyles = `card card--${status}`;

  // Intentar dejar la template lo más limpia posible
  return (
    <div className={cardStyles}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>
          Mensaje: {message}
          {type}
        </p>
      </div>
    </div>
  );
};
