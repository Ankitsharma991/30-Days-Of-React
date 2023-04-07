import Frontend from "./components/Frontend";
import "./App.css";
import Design from "./components/Design";
import ColorGenerator from "./components/ColorGenerator";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div>
      <Portfolio />
      <h1 className="text">Front End Technologies</h1>
      <Frontend />
      <Design />
      <ColorGenerator />
    </div>
  );
}

export default App;
