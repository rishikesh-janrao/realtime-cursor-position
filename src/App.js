import "./App.css";
import useMousePosition from "./useMousePosition";

function App() {
  const [x, y] = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Real time mouse position</h2>
        <h3>
          X - {x} &nbsp; Y - {y}
        </h3>
      </header>
    </div>
  );
}

export default App;
