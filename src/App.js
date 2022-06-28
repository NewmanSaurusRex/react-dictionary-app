import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <container>
        <main>
          <Dictionary />
        </main>
      </container>
      <footer>
        This app was coded by <a href="https://mnewman.io">MNewman</a> and is{" "}
        <a href="https://github.com/NewmanSaurusRex/react-dictionary-app">
          open sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://dazzling-lily-10fca4.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
