import './App.scss';
import Comments from './components/comments/Comments';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
      <Comments />
    </div>
  );
}

export default App;
