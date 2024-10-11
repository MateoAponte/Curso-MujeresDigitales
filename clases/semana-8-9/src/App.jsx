import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ACTIONS } from './redux/slice/message/types';
import { thunks } from './redux/slice/message/thunks';
import { actions } from './redux/slice/message/slice';
import useStore from './zustand/store/store';

function App() {
  // Uso de Redux
  // const { status } = useSelector((state) => state.message);
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   dispatch(
  //     actions[ACTIONS.SET_STATUS]({
  //       title: 'Información fallida',
  //       type: 'error',
  //     })
  //   );
  // };
  // useEffect(() => {
  //   dispatch(thunks[ACTIONS.FETCH_POSTS]());
  // }, []);

  // Uso de Zustand
  const { count, increment, decrement, fetchPosts, posts } = useStore();

  useEffect(() => {
    fetchPosts();
  }, []);

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
        {JSON.stringify(posts[0])}
        {/* <h1>Titulo: {status.title}</h1>
        <span>Contenido: {status.type}</span> */}
      </div>
      <button onClick={() => handleClick()}>Actualizar Información</button>
      <br />
      <br />
      <h4>{count}</h4>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </>
  );
}

export default App;
