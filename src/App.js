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
            Coded by Ana Aguilar. This code is{" "}
            <a
              href="https://github.com/Ana-LanitaChan/react-dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source,
            </a>{" "}
            using{" "}
            <a
              href="https://dictionaryapi.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dictionary api
            </a>{" "}
            and{" "}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels api.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
