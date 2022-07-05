import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="universe"/>
        </main>

        <footer className="App-footer mt-3">
          This app was coded by{" "}
          <a
            href="https://mnewman.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            MNewman
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NewmanSaurusRex/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dazzling-lily-10fca4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
