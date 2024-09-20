import { AdviceProvider } from './context/AdviceProvider';
import { AdviceLayout } from './layout/AdviceLayout';
import { AdvicePage } from './page/AdvicePage';

function App() {
  return (
    <>
      <AdviceProvider>
        <AdviceLayout>
          <AdvicePage />
        </AdviceLayout>
      </AdviceProvider>
    </>
  );
}

export default App;
