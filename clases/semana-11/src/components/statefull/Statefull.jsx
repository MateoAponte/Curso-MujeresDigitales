import { useState } from 'react';

export const Statefull = ({ title, message, status, type }) => {
  const [count, setCount] = useState(0);
  const cardStyles = `card card--${status}`;

  const handleClick = () => {
    setCount(count + 1);
  };

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
        <p>Contador: {count}</p>
      </div>
      <div className="card-footer">
        <button onClick={() => handleClick()}>Contador</button>
      </div>
    </div>
  );
};
