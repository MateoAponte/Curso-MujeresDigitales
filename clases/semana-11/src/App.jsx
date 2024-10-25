import { Statefull } from './components/statefull/Statefull';
import { Stateless } from './components/stateless/Stateless';
import { Hocs } from './components/hocs/Hocs';
import './App.css';
import { InfoHeader } from './components/hocs/InfoHeader';
import { ErrorHeader } from './components/hocs/ErrorHeader';

export const App = () => {
  const cardInfo = {
    title: 'Tipos de componente',
    message: 'Este es un componente de ',
    status: 'info',
  };

  const getTitle = `${cardInfo.title} - ${cardInfo.status}`;
  const header =
    cardInfo.status === 'info' ? (
      <InfoHeader title={getTitle} />
    ) : (
      <ErrorHeader title={getTitle} />
    );

  return (
    <>
      <div className="container">
        <Statefull {...cardInfo} type="statefull" />
        <Stateless {...cardInfo} type="stateless" />
        <Hocs {...cardInfo} type="Hoc's" header={header} />
      </div>
    </>
  );
};
