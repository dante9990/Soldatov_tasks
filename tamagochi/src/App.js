import './App.scss';
import Controls from './components/controls/controls';
import Stats from './components/stats/stats';

function App() {
  return (
    <div className="wrap">
      <h1 className="title">MiniGame</h1>
      <div className="App">
        <Stats />
        <Controls />
      </div>
    </div>
  );
}

export default App;
