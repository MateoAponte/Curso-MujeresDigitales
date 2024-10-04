import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setStatus } from './redux/slice/messageSlice';
import { useEffect } from 'react';

function App() {
  const { status, posts } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setStatus({ title: 'Información fallida', type: 'error' }));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Titulo: {status.title}</h1>
        <span>Contenido: {status.type}</span>
      </div>
      <button onClick={() => handleClick()}>Actualizar Información</button>
    </>
  );
}

export default App;
