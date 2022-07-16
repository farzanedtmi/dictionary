import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer className="footer">
        This App is coded by farzane and is{" "}
        <a href="https://github.com/farzanedtmi/dictionary/commit/e3abd4ff598bc1e2b7b9fc1d8cf659a9dd424666">
          open-sourced in GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
