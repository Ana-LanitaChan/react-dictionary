import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary ( ❛ᴗ❛ )</h1>
        <Dictionary defaultkeyword="code" />
        <footer>
          <hr />
          <small>
            This code is{" "}
            <a
              href="https://github.com/Ana-LanitaChan/react-dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
