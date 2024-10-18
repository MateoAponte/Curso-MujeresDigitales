import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CatService from './services/cat/CatService';
import DogService from './services/dog/DogService';

function App() {
  const [count, setCount] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const cats = await CatService.getCats();
      setCats(cats);

      const dogs = await DogService.getDogs();
      setDogs(dogs);
    };

    getCat();
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <section className="pets-container">
        <figure>
          <img src={dogs[0]?.url} alt="Dog" />
          <figcaption>{dogs[0]?.id}</figcaption>
        </figure>
        <figure>
          <img src={cats[0]?.url} alt="Cat" />
          <figcaption>{cats[0]?.id}</figcaption>
        </figure>
      </section>
    </>
  );
}

export default App;
