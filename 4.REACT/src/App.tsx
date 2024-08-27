import MuiMode from './components/withStructure/mui/MuiMode';
import { ModeProviders } from './providers/ModeProviders';
import Count from './components/withStructure/count/Count';
import UseEffectExercise from './hooks/useEffect/UseEffectExercise';
import { ToastMain } from './1.MACHINE_CODING/toast/ToastMain';

function App() {
  return (
    <ModeProviders>
      <div className="App">
        {/* <MuiMode /> */}
        {/* <Count /> */}
        <UseEffectExercise />
        <ToastMain />
      </div>
    </ModeProviders>
  );
}

export default App;
