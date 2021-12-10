import './App.css';
import Class from './Class';
import Functional from './Functional';

function App() {
  return (
    <div className="App">
      {/* Insert heading here */}
      <section className="App-header">
        <Class />
        <Functional />
      </section>
    </div>
  );
}

export default App;
