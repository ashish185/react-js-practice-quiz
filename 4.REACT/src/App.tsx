import MuiMode from './components/withStructure/mui/MuiMode';
import { ModeProviders } from './providers/ModeProviders';
import Count from './components/withStructure/count/Count';
import UseEffectExercise from './hooks/useEffect/UseEffectExercise';

function App() {
  return (
    <ModeProviders>
      <div className="App">
        {/* <MuiMode /> */}
        {/* <Count /> */}
        <UseEffectExercise />
      </div>
    </ModeProviders>
  );
}

export default App;
